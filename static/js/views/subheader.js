fun.views.subheader = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {
        'click #call-btn': 'call',

    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.subheader = this.$el;

        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");

        fun.omnibus.on("change:context", function(){
            this.renderHeadNav();
        }, this);
    },
    
    /**
     * Render the subheader view
     */
    render : function(header){
        if(header){
            this.header = header;
        } else {
            this.header = 'nonsense';
        }

        var data = {
            header:this.header
        };

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.subheader))(data);

        this.$el.html(template);
        this.$el.show();
    },

    renderHeadNav : function(){
        'use strict';
        var template,
            headNav,
            account, 
            context;

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.headNav)
        );

        headNav = this.$('#fun-head-nav');

        headNav.html(template);

        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        if (account !== context){
            this.$('#head-nav-members').removeClass('hide').addClass('show');
            this.$('#head-nav-teams').removeClass('hide').addClass('show');
        } else {
            this.$('#head-nav-members').removeClass('show').addClass('hide');
            this.$('#head-nav-teams').removeClass('show').addClass('hide');   
        }
    },

    renderHeadNavCampaigns : function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.headNavCampaigns)
        );

        var headNav = this.$('#fun-head-nav');

        headNav.html(template);
    },

    renderHeadNavReports : function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.headNavReports)
        );

        var headNav = this.$('#fun-head-nav');

        headNav.html(template);
    },

    call: function(event) {
        'use strict';
        event.preventDefault();
        console.log('call some fucking one');
    }

});
