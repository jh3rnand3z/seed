fun.views.dashboard = Backbone.View.extend({

    events : {
        
    },

    initialize : function(options) {
        fun.containers.dashboard = this.$el;
    },

    render : function(account, summary, billing){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.dashboard)
        );

        this.$el.html(template);
        this.$el.show();

        this.renderTodaySummary(account, summary, billing);
        this.renderTodayActivityChart();
        this.renderLatestRecords();
        this.renderRecordType();

        
    },

    renderTodaySummary : function(account, summary, billing){
        if(account){
            this.account = account;
        } else {
            this.account = 'anonymoxuxious';
        }

        if(summary){
            this.summary = summary;
        }

        if(billing){
            this.billing = billing;
        }

        if(summary && billing){
            var data = _.extend(this.summary.toJSON(), 
                                {'account':this.account},
                                this.billing.toJSON());
        } else {
            var data = {
                account: this.account,
                seconds: 0,
                minutes: 0,
                records: 0,
                billing: 0,
                rec_avg: 0
            };
        }
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.todaySummary)
        )(data);
        
        var todaySummary = this.$('#fun-today-summary');
        todaySummary.html(template);
    },

    renderTodayActivityChart : function(summary){
        // This hole summary can be parsed in a single requests
        // directly to the flot.js library. example on pag 5 of the mango docs.
        var data = []
        var minutes = [];
        var records = [];
        
        // check if response from the server
        if(summary){
            this.summary = summary;
            this.seconds = summary.get('seconds');
            this.minutes = summary.get('minutes');
            this.records = summary.get('records');
        }
        
        // push the seconds missing

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
            points: { show: false }, 
            lines: { lineWidth: 2, fill: false }
        });
        
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.todayActivityChart)
        )(data);

        var todayActivityChart = this.$('#fun-today-activity-chart');
        todayActivityChart.html(template);

        // clean charts
        Charts.line('#line-chart', data);
    },

    renderLatestRecords : function(collection){
        if (collection) {
            this.collection = collection;
        } else {
            this.collection = 0;
        }

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.latestRecords)
        );

        var latestRecords = this.$('#fun-latest-records');

        latestRecords.html(template);

        this.tbody = this.$('#records-list > tbody');
        this.$el.show();
        this.renderRows();
    },

    renderRecordType : function(){
        //var data = {};

        // Randomly Generated Data

        var data = [],
            series = Math.floor(Math.random() * 6) + 3;

        for (var i = 0; i < series; i++) {
            data[i] = {
                label: "Series" + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            }
        }

        // A custom label formatter used by several of the plots
        function labelFormatter(label, series) {
            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
        }

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.recordType)
        )(data);

        var recordType = this.$('#fun-record-type');
        
        recordType.html(template);
        /*
        $.plot('#pie-chart', data, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 1,
                        formatter: labelFormatter,
                        background: {
                            opacity: 0.8
                        }
                    }
                }
            },
            legend: {
                show: false
            }
        });
        */

        $.plot('#pie-chart', data, {
            series: {
                pie: {
                    show: true
                }
            }
        });
    },

    renderRows: function(){
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
    
    noRecords : function() {
    	var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        var noRecords = this.$('#no-records');

        noRecords.html(template);
    }
});