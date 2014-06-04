fun.views.exit = Backbone.View.extend({

    events: {
        'click #exit-btn' : 'exit'
    },

    initialize : function(options) {
        fun.containers.exit = this.$el;
    },
    
    render : function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.exit)
        );
        this.$el.html(template);
        this.$el.show();

        //if(fun.utils.loggedIn()){
        //    this.renderNavDashboard();
        //    
        //} else {
        //    this.renderNavLanding();
        //}
    },

    exit: function(event){
        event.preventDefault();

        var email = this.$('#subscribe-email').val();
        
        fun.utils.subscribe(email, {
            success : function(jqXHR, textStatus){
                this.$('#subscribe-email').val('');
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log('subscribe error');
            }
        });
    }

});