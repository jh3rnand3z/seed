fun.Router = Backbone.Router.extend({

    /*
     seed urls router
    */
    routes: {
        "": "home",
        "home": "home",

        "landing": "landing",

        "howto": "howto",
        
        "features": "features",
        "enterprise": "enterprise",

        "terms": "terms",
        "security": "security",
        "privacy": "privacy",
        "status": "status",
        "developers": "developers",
        "help ": "help ",

        "contact": "contact",

        "signup": "signup",
        "login": "login",

        "dashboard": "dashboard",
        
        "campaigns": "campaigns",
        "orgs": "orgs",

        "activity": "activity",
        "profile": "profile",
        "members": "members",
        "teams": "teams",

        "reports": "reports",

        "phone": "phone",
        "recordings": "recordings",

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
            el:"#fun-subheader"
        });

        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });

        // howto
        fun.instances.howto = new fun.views.howto({
            el:"#fun-howto"
        });

        // features
        fun.instances.features = new fun.views.features({
            el:"#fun-features"
        });

        // enterprise
        fun.instances.enterprise = new fun.views.enterprise({
            el:"#fun-enterprise"
        });

        // terms
        fun.instances.terms = new fun.views.terms({
            el:"#fun-terms"
        });

        // privacy
        fun.instances.privacy = new fun.views.privacy({
            el:"#fun-privacy"
        });

        // security
        fun.instances.security = new fun.views.security({
            el:"#fun-security"
        });

        // status
        fun.instances.status = new fun.views.status({
            el:"#fun-status"
        });

        // developers
        fun.instances.developers = new fun.views.developers({
            el:"#fun-developers"
        });

        // help
        fun.instances.help = new fun.views.help({
            el:"#fun-help"
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


        // campaigns
        fun.instances.campaigns = new fun.views.campaigns({
            el:"#fun-campaigns"
        });

        // orgs
        fun.instances.orgs = new fun.views.orgs({
            el:"#fun-orgs"
        });


        // profile
        fun.instances.profile = new fun.views.profile({
            el:"#fun-profile"
        });

        // activity
        fun.instances.activity = new fun.views.activity({
            el:"#fun-activity"
        });

        // members
        fun.instances.members = new fun.views.members({
            el:"#fun-members"
        });

        // teams
        fun.instances.teams = new fun.views.teams({
            el:"#fun-teams"
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

    howto: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Howto');
        fun.instances.howto.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    features: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Features');
        fun.instances.features.render();
        
        fun.instances.footer.render();
    },

    enterprise: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Enterprise');
        fun.instances.enterprise.render();
        
        fun.instances.footer.render();
    },

    terms: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Terms');
        fun.instances.enterprise.render();
        
        fun.instances.footer.render();
    },

    privacy: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Privacy');
        fun.instances.enterprise.render();
        
        fun.instances.footer.render();
    },

    security: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Security');
        fun.instances.enterprise.render();
        
        fun.instances.footer.render();
    },

    status: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Status');
        fun.instances.enterprise.render();
        
        fun.instances.footer.render();
    },

    developers: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Developers');
        fun.instances.enterprise.render();
        
        fun.instances.footer.render();
    },

    help: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Help');
        fun.instances.enterprise.render();
        
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
            fun.instances.subheader.renderHeadNav();

            fun.instances.dashboard.render();
            for (var message in models){
                models[message].fetch({
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

    members: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Members');
        fun.instances.subheader.renderHeadNav();
        fun.instances.members.render();
        
        fun.instances.footer.render();
    },

    campaigns: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Campaings');
        fun.instances.subheader.renderHeadNav();
        fun.instances.campaigns.render();
        
        fun.instances.footer.render();
    },

    orgs: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Orgs');
        fun.instances.subheader.renderHeadNav();
        fun.instances.orgs.render();
        
        fun.instances.footer.render();
    },

    profile: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Profile');
        fun.instances.profile.render();
        
        fun.instances.footer.render();
    },

    activity: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Activity');
        fun.instances.subheader.renderHeadNav();
        fun.instances.activity.render();
        
        fun.instances.footer.render();
    },

    members: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Members');
        fun.instances.subheader.renderHeadNav();
        fun.instances.members.render();
        
        fun.instances.footer.render();
    },

    teams: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Teams');
        fun.instances.subheader.renderHeadNav();
        fun.instances.teams.render();
        
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
        fun.instances.subheader.render('Good bye!');      
        fun.instances.login.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    }

});

$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});