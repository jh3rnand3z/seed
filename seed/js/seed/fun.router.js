fun.Router = Backbone.Router.extend({

    /*
     seed urls router
    */
    routes: {
        "": "home",
        "home": "home",
        "landing": "landing",
        "about": "about",
        "stories": "stories",
        "technology": "technology",
        "education": "education",
        "services": "services",
        "products": "products",
        "community": "community",
        "contact": "contact",
        "signup": "signup",
        "login": "login",
        "dashboard": "dashboard",
        "phone": "phone",
        "recordings": "recordings",
        "reports": "reports",
        "support": "support",
        "settings": "settings",
        "logout": "logout"
    },

initialize: function(){
      
        // navigation bar
        fun.instances.navbar = new fun.views.navbar({
            el:"#fun-navbar"
        });

        // sub header
        fun.instances.subheader = new fun.views.subheader({
            el:"#fun-subheader"});

        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });
        
        // about
        fun.instances.about = new fun.views.about({
            el:"#fun-about"
        });

        // stories
        fun.instances.stories = new fun.views.stories({
            el:"#fun-stories"
        });

        // technology
        fun.instances.technology = new fun.views.technology({
            el:"#fun-technology"
        });

        // education
        fun.instances.education = new fun.views.education({
            el:"#fun-education"
        });

        // services
        fun.instances.services = new fun.views.services({
            el:"#fun-services"
        });

        // products
        fun.instances.products = new fun.views.products({
            el:"#fun-products"
        });

        // community
        fun.instances.community = new fun.views.community({
            el:"#fun-community"
        });

        // contact
        fun.instances.contact = new fun.views.contact({
            el:"#fun-contact"
        });

        // login
        fun.instances.login = new fun.views.login({
            el:"#fun-login"
        });

        // dashboard
        fun.instances.dashboard = new fun.views.dashboard({
            el:"#fun-dashboard"
        });

        // phone
        fun.instances.phone = new fun.views.phone({
            el:"#fun-phone"
        });

        // recordings
        fun.instances.recordings = new fun.views.recordings({
            el:"#fun-recordings"
        });
          
        // reports
        fun.instances.reports = new fun.views.reports({
            el:"#fun-reports"
        });
        
        // support
        fun.instances.support = new fun.views.support({
            el:"#fun-support"
        });

        // signup
        fun.instances.signup = new fun.views.signup({
            el:"#fun-signup"
        });
        
        // settings
        fun.instances.settings = new fun.views.settings({
            el:"#fun-settings"
        });

        // extra
        fun.instances.extra = new fun.views.extra({
            el:"#fun-extra"
        });

        // footer
        fun.instances.footer = new fun.views.footer({
            el:"#fun-footer"
        });


        // stuff from localStorage
    },
    
    home: function(){
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.redirect(fun.conf.hash.landing);
        }
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    landing: function(){

        fun.utils.hideAll();

        fun.instances.navbar.render();
        fun.instances.landing.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    about: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('About');
        fun.instances.about.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    stories: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Stories');
        fun.instances.stories.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    technology: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Technology');
        fun.instances.technology.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    community: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Community');
        fun.instances.community.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    education: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Education');
        fun.instances.education.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    products: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Products');
        fun.instances.products.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    services: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Services');
        fun.instances.services.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    support: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Support');
        fun.instances.support.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    contact: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Contact');
        fun.instances.contact.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    signup: function(){
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Signup');
            fun.instances.signup.render();
        }
        fun.instances.extra.render();
        fun.instances.footer.render();
    },
    
    login: function(){
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Login');
            fun.instances.login.render();
        }
        fun.instances.extra.render();
        fun.instances.footer.render();
    },
    
    dashboard: function(){
        var modelCount = 0;
        var models = {
            records: new fun.models.Records(),
            billings: new fun.models.Billings(),
            summary: new fun.models.Summary(),
            lapseSummary: new fun.models.LapseSummary({
                lapse: 'hours'
            })
        };

        var onSuccess = function(){
            if(++modelCount == _.keys(models).length){
                console.log('daemon');
                console.log('success!');

                fun.instances.dashboard.renderLatestRecords(
                    models.records
                );

                fun.instances.dashboard.renderTodaySummary(
                    models.summary, models.billing
                );
                
                fun.instances.dashboard.renderTodayActivityChart(
                    models.lapseSummary
                );
                
                console.log('Distribution Missing!')                    
                // fun.instances.dashboard.renderRecordType();
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();

            fun.instances.navbar.render();
            fun.instances.subheader.render('Dashboard');
            fun.instances.dashboard.render();
            
            for (var x in models){
                models[x].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    phone: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Phone');
        fun.instances.phone.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    reports: function(){
        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();

            fun.instances.subheader.render('Reports');

            fun.instances.reports.render();
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    recordings: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Recordings');
        fun.instances.recordings.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    settings: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Settings');
        fun.instances.settings.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    logout: function(){
        fun.utils.logout();
        fun.utils.hideAll();
        fun.instances.navbar.render()
        fun.instances.subheader.render('Stuff');      
        fun.instances.login.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    }

});

$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});