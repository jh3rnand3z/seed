fun.views.dashboard = Backbone.View.extend({
   
    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #today-btn': 'today',
        'click #this-week-btn': 'thisWeek',
        'click #this-month-btn': 'thisMonth',
        'click #this-year-btn': 'thisYear',
        'click input[name="current_account"]': 'setContext'
    },

    initialize: function(options){
        // initialize view constructor
        'use strict';
        fun.containers.dashboard = this.$el;

        this.account = localStorage.getItem("username");
    },

    render: function(account, summary, billing){
        
        // Render view function
        'use strict';
        console.log("username = " + this.account)

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.dashboard)
        )({'account':this.account});

        this.$el.html(template);
        this.$el.show();

        this.renderTodaySummary(this.account, summary, billing);
        this.renderTodayActivityChart();
        this.renderLatestRecords();
        this.renderRecordType();
    },

    renderAccountDropdown: function(account){
        // Render account dropdown
        //'use strict';
        //console.log(account);
        var counter, // i
            length,
            orgData,
            itemData,
            data,
            itemTemplate;

        // Can I get the list from localStorage?, pretty please.

        if (account) {
            //data = account.toJSON();

            console.log(account);

            this.orgs = account.get("orgs");
        } else {
            this.orgs = 0;
        }

        this.accountList = this.$('#account-dropdown ul');

        counter = 0;
        length = this.orgs.length;
        
        if (length > 0){

            // i, search _.each function
            for ( counter; counter < length; ++counter ) {

                orgData = {
                    'account': account.get("account"),
                    'org': this.orgs[counter] // set, put, post, patch
                };

                itemData = _.extend(orgData, {counter:counter+1});

                itemTemplate = _.template(
                    fun.utils.getTemplate(fun.conf.templates.accountListItem)
                )(itemData);

                this.accountList.append(itemTemplate);
            }
        }
    },

    renderTodaySummary: function(account, summary, billing){
        // Render today summary
        'use strict';
        var account,
            data,
            template,
            todaySummary;

        if(account !== this.account){
            account = this.account;
        }

        if(summary){
            this.summary = summary;
        }

        if(billing){
            this.billing = billing;
        }

        if(summary && billing){
            data = _.extend(this.summary.toJSON(), 
                                {'account':account},
                                this.billing.toJSON());
        } else {
            data = {
                account: account,
                seconds: 0,
                minutes: 0,
                records: 0,
                billing: 0,
                rec_avg: 0
            };
        }
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.todaySummary)
        )(data);
        
        todaySummary = this.$('#fun-today-summary');
        todaySummary.html(template);
    },

    renderTodayActivityChart: function(summary){
        // Render today activity chart
        // This hole summary can be parsed in a single requests
        // directly to the flot.js library.
        'use strict';
        var data = [],
            seconds = [],
            minutes = [],
            records = [],
            template,
            todayActivityChart;

        // check if response from the server
        if(summary){
            this.summary = summary;
            this.seconds = summary.get('seconds');
            this.minutes = summary.get('minutes');
            this.records = summary.get('records');
        }
        
        // push the seconds
        for (x in this.seconds){
            seconds.push([x, this.seconds[x]]);
        }

        data.push({
            data: seconds,
            label: 'Seconds'
        });

        // push the minutes
        for (x in this.minutes){
            minutes.push([x, this.minutes[x]]);
        }

        data.push({
            data: minutes,
            label: 'Minutes'
        });
        
        // push the records
        for (x in this.records){
            records.push([x, this.records[x]]);
        }
        data.push({
            data: records,
            label: 'Records',
            points: {show: false}, 
            lines: {lineWidth: 2, fill: false}
        });
        
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.todayActivityChart)
        )(data);

        todayActivityChart = this.$('#fun-today-activity-chart');
        todayActivityChart.html(template);

        // clean charts
        Charts.line('#line-chart', data);
    },

    renderLatestRecords: function(collection){
        // Render latesst records
        
        'use strict';
        var template,
            latestRecords;

        if (collection) {
            this.collection = collection;
        } else {
            this.collection = 0;
        }

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.latestRecords)
        );

        latestRecords = this.$('#fun-latest-records');
        latestRecords.html(template);

        this.tbody = this.$('#records-list > tbody');
        this.$el.show();
        this.renderRows();
    },

    renderRecordType: function(){
        // Render records type
        'use strict';
        var data,
            series,
            i,
            counter,
            recordType,
            template;

        // Randomly Generated Data
        data = [],
        series = Math.floor(Math.random() * 6) + 3;

        for (var i = 0; i < series; i++) {
            data[i] = {
                label: "Series" + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            }
        }
        /*
        //A custom label formatter used by several of the plots
        function labelFormatter(label, series) {
            return "<div 
                            style='font-size:8pt;
                            text-align:center;
                            padding:2px; 
                            color:white;'>"
                    + label
                    + "<br/>"
                    + Math.round(series.percent)
                    + "%</div>";
        }
        */
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.recordType)
        )(data);

        recordType = this.$('#fun-record-type');
        recordType.html(template);

        $.plot('#pie-chart', data, {
            series: {
                pie: {
                    show: true
                }
            }
        });
    },

    renderRows: function(){
        // Render rows
        var i = 0;
        var length = this.collection.length;

        if (length > 0){
            var rows = this.tbody.html('');
           
            // da fuq dude?
            for ( i; i < 7; ++i ) {

                var data = _.extend(this.collection.at(i).toJSON(), {i:i});

                var template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.recordRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noRecords();
        }
    },

    noRecords: function() {
        // No records
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        var noRecords = this.$('#no-records');

        noRecords.html(template);
    },

    today: function(event){
        // Today
        console.log('today event');
    },

    thisWeek: function(event) {
        // This week
        console.log('this week event');
    },

    thisMonth: function(event){
        // This month
        console.log('this month event');
    },

    thisYear: function(event){
        // This year
        console.log('this year event');
    },

    setContext: function(event){
        // Set context org

        console.log('setting up activity context');

        $('input[name="current_account"]:checked').each(function() {
            var idVal = $(this).attr("id");

            // Check browser support
            if (typeof(Storage) != "undefined") {
                // Store
                sessionStorage.setItem("context", $("label[for='"+idVal+"']").text());
            }
        });

        //console.log(fun.conf.hash.dashboard);
        //Backbone.history.loadUrl();
        fun.instances.subheader.renderHeadNav();
        return false;
        //fun.utils.redirect(fun.conf.hash.dashboard);
    }

});