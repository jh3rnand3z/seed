fun.views.subheader = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.subheader = this.$el;

        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");
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
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.headNav)
        );

        var headNav = this.$('#fun-head-nav');

        headNav.html(template);

        if (this.account !== this.context){
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

});
