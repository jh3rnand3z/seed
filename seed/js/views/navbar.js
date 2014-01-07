fun.views.navbar = Backbone.View.extend({

	events: {

	},

    initialize: function(options) {
        fun.containers.navbar = this.$el;
    },
    
    render: function(){
        var template = _.template(fun.utils.getTemplate(fun.conf.templates.navbar));

        this.$el.html(template);
        this.$el.show();

        if(fun.utils.loggedIn()){
            console.log('logged in bitch');
            this.renderDashboard();
            
        } else {
            console.log('no log fucking in');
            this.renderLanding();
        }
    },

    renderLanding: function(){
        var template = _.template(fun.utils.getTemplate(fun.conf.templates.navLanding));

        var navLanding = this.$('#fun-nav-landing');
        navLanding.html(template);
    },

    renderDashboard: function(){
        var template = _.template(fun.utils.getTemplate(fun.conf.templates.navDashboard));

        var navDashboard = this.$('#fun-nav-dashboard');
        navDashboard.html(template);
    },

    renderAdmin: function(){
        var template = _.template(fun.utils.getTemplate(fun.conf.templates.navAdmin));

        var navAdmin = this.$('#fun-nav-admin');
        navAdmin.html(template);
    }
});
