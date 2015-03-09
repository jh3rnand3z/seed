fun.Router = Backbone.Router.extend({

    /*
     Seed routes
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
        "blog": "blog",
        "status": "status",
        "developers": "developers",
        "help": "help",
        "signup": "signup",
        "login": "login",

        "dashboard": "dashboard",        
        "dashboard/a:account": "dashboard",
        "dashboard/a:account/o:org": "dashboard",
        
        "campaigns": "campaigns",
        "orgs": "orgs",
        "activity": "activity",
        "profile": "profile",
        "members": "members",
        "teams": "teams",

        "reports": "reports",
        "reports/p:page": "reports",
        
        "phone": "phone",
        "numbers": "phone_numbers",
        "carriers": "carriers",
        
        "contacts": "contacts",
        "contacts/p:page": "contacts",
        
        "sounds":"sounds",
        "recordings": "recordings",
        "gateways": "gateways",
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

        // blog
        fun.instances.blog = new fun.views.blog({
            el:"#fun-blog"
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

        // phone numbers
        fun.instances.phoneNumbers = new fun.views.phoneNumbers({
            el:"#fun-phone-numbers"
        });

        // gateways
        fun.instances.gateways = new fun.views.gateways({
            el:"#fun-gateways"
        });

        // carriers
        fun.instances.carriers = new fun.views.carriers({
            el:"#fun-carriers"
        });

        // campaigns
        fun.instances.campaigns = new fun.views.campaigns({
            el:"#fun-campaigns"
        });

        // contacts
        fun.instances.contacts = new fun.views.contacts({
            el:"#fun-contacts"
        });

        // recordings
        fun.instances.recordings = new fun.views.recordings({
            el:"#fun-recordings"
        });
        
        // sounds
        fun.instances.sounds = new fun.views.sounds({
            el:"#fun-sounds"
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
    },
    
    home: function(){

        console.log('spawn some fun get account and context');

        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");

        console.log(this.account, this.context);

        if (this.account === this.context){
            console.log('account same as context');
        } else {
            console.log('missing or different context');
        }

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
        fun.instances.terms.render();
        fun.instances.footer.render();
    },

    privacy: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Privacy');
        fun.instances.privacy.render();
        fun.instances.footer.render();
    },

    security: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Security');
        fun.instances.security.render();
        fun.instances.footer.render();
    },

    blog: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Blog');
        fun.instances.blog.render();
        
        fun.instances.footer.render();
    },

    status: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Status');
        fun.instances.status.render();
        fun.instances.footer.render();
    },

    developers: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Developers');
        fun.instances.developers.render();
        fun.instances.footer.render();
    },

    help: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Help');
        fun.instances.help.render();
        fun.instances.footer.render();
    },

    support: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Support');
        fun.instances.support.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    members: function(){
        'use strict';
        var resourceCount = 0,
            resources,
            resource,
            account,
            context,
            onSuccess;

        context = sessionStorage.getItem("context");

        console.log(context);
        resources = {
            org: new fun.models.Org({'account':context})
        };

        onSuccess = function(){
            if(++resourceCount == _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.members.renderMembersPanel(
                    resources.org
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Members');
            fun.instances.subheader.renderHeadNav();
            // render memberss view
            fun.instances.members.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    contacts: function(page){
        '';
        // and now for something completely different
        var resourceCount = 0;
        
        var resources = {
            contacts: new fun.models.Contacts(),
            directories: new fun.models.Directories()
        };

        var onSuccess = function(){
            if(++resourceCount == _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.contacts.renderContactLists(
                    resources.contacts
                );

                fun.instances.contacts.renderDirectoryLists(
                    resources.directories
                );
            }
        };

        if (isNaN(page)) {
            page = 1;
        }

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Contacts');
            fun.instances.subheader.renderHeadNav();
            // render contacts view
            fun.instances.contacts.render();

            for (var resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
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
        //fun.instances.footer.render();
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

        //fun.instances.footer.render();
    },
    
    dashboard: function(account, org){
        'use strict';

        console.log(account, org);

        if (!account){
            var account = localStorage.getItem("username");
        } else {
            if (account.substring(0, 1) == ':') { 
                account = account.substring(1);
            }
        }

        console.log(account);

        var modelCount = 0;
        
        var models = {
            user: new fun.models.User({'account':account}),
            records: new fun.models.Records(),
            billings: new fun.models.Billings(),
            summary: new fun.models.Summary(),
            lapseSummary: new fun.models.LapseSummary({
                lapse: 'hours'
            })
        };


        if (org) {
            models.org = new fun.models.Org({'account': org});
            //window.history.pushState('orgDashboard', 'Dashboard', '/orgs/iofun/dashboard');
        }

        var onSuccess = function(){
            if(++modelCount == _.keys(models).length){
                console.log('spawn daemon success!');

                fun.instances.dashboard.renderLatestRecords(
                    models.records
                );

                fun.instances.dashboard.renderTodaySummary(
                    models.summary, models.billing
                );

                fun.instances.dashboard.renderTodayActivityChart(
                    models.lapseSummary
                );

                fun.instances.dashboard.renderAccountDropdown(
                    models.user
                );

                // need to pass stuff to renderRecordType()                   
                fun.instances.dashboard.renderRecordType();
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
        fun.instances.footer.render();
    },

    campaigns: function(){
        'use strict';
        fun.utils.hideAll();

        fun.instances.navbar.render();

        fun.instances.subheader.render('Campaigns');

        fun.instances.subheader.renderHeadNavCampaigns();

        fun.instances.campaigns.render();

        //fun.instances.footer.render();
    },

    carriers: function(){
        'use strict';
        fun.utils.hideAll();

        fun.instances.navbar.render();

        fun.instances.subheader.render('Carriers');

        fun.instances.subheader.renderHeadNav();

        fun.instances.carriers.render();
        
        //fun.instances.footer.render();
    },

    gateways: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Gateways');
        fun.instances.subheader.renderHeadNav();

        fun.instances.gateways.render();
        
        //fun.instances.footer.render();
    },

    orgs: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Organizations');
        fun.instances.subheader.renderHeadNav();
        fun.instances.orgs.render();
        
        //fun.instances.footer.render();
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
        fun.instances.footer.render();
    },

    phoneNumbers: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Numbers');
        fun.instances.phoneNumbers.render();
        fun.instances.footer.render();
    },

    sounds: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Sounds');
        fun.instances.subheader.renderHeadNavCampaigns();
        fun.instances.sounds.render();
        //fun.instances.footer.render();
    },

    reports: function(page){
        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();

            fun.instances.subheader.render('Reports');
            fun.instances.subheader.renderHeadNavReports();

            fun.instances.reports.render();
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        
        fun.instances.footer.render();
    },

    recordings: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Recordings');
        fun.instances.subheader.renderHeadNavCampaigns();
        fun.instances.recordings.render();
        fun.instances.footer.render();
    },

    settings: function(){
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render('Settings');
        fun.instances.settings.render();
        fun.instances.footer.render();
    },

    logout: function(){
        fun.utils.logout();
        fun.utils.hideAll();
        fun.instances.navbar.render()
        fun.instances.subheader.render('Good bye!');      
        fun.instances.login.render();
        //fun.instances.footer.render();
    }

});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});