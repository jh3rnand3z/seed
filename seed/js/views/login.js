fun.views.login = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {
        'click #login-btn' : 'login',
        'click #signup-btn' : 'signup'
    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.login = this.$el;
    },
    
    /**
     * Renders the login view
     */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.login));
            this.$el.html(template);
            
            // Cache the DOM stuff
            this.loginError = this.$('#login-error');
            // form inputs
            this.username = this.$('#username');
            this.password = this.$('#password');
        }
        this.$el.show();
    },
    
    /**
     * signup event
     */ 
    signup : function() {
        window.location = fun.conf.hash.signup;
    },
    
    /**
     * login event
     */
    login : function(event){
        event.preventDefault();
        
        var loginError = this.loginError;
        var username = this.username.val();
        var password = this.password.val();
        var view = this;

        var loginSuccess = function(view, loginError){
            // Clear the stuff from the inputs ;)
            view.$('#username').val('');
            view.$('#password').val('');
            loginError.hide();
            fun.utils.redirect(fun.conf.hash.dashboard);
        };
        
        fun.utils.login(username, password, {
            success : function(jqXHR, textStatus){
                loginSuccess(view, loginError);
            },
            error : function(jqXHR, textStatus, errorThrown) {
                loginError.show();
                switch(jqXHR.status) {
                    case 403:
                        loginError.find('p').html('The username or password you entered is incorrect.');
                        break;
                    case 200:
                        loginSuccess(view, loginError);
                        break;
                    default:
                        alert('the monkey is down');
                        break;
                }
            }
        
        });
    }

});
