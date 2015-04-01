fun.views.campaigns = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #create-campaign-btn': 'createCampaign',
    },

    /*
    * Class constructor
    */
    initialize: function(options){
        fun.containers.campaigns = this.$el;
    },

    /*
    * Render view
    */
    render: function(){
        'use strict';
        var account,
            template;

        console.log('render campaigns view');
        account = localStorage.getItem("username");

        if (!this.$el.html()){
            template = _.template(fun.utils.getTemplate(fun.conf.templates.campaigns)
            )({'account':account});
            this.$el.html(template);
            // DOM cache stuff on form fields
            this.campaignName = this.$('#campaign_name');
            this.campaignDescription = this.$('#campaign_description');
            
            //this.campaignType =
            //this.campaignAccount =
            
            this.account = account;
        }
        this.$el.show();
    },

    /*
    * Create campaign
    */
    createCampaign: function(event){
        'use strict';
        event.preventDefault();
        var view,
            account,
            campaign,
            campaignName,
            campaignDescription,

        console.log('create campaign event');

        // view cache
        view = this;

        account = this.account;

        campaignName = this.campaignName.val();

        campaignDescription = this.campaignDescription.val();

        campaign = new fun.models.Campaign({
            account: account,
            name: campaignName,
            description: campaignDescription
        });

        campaign.save();
        
        // Clear the stuff from the inputs ;)
        view.$('#campaign_name').val('');
        view.$('#campaign_description').val('');

        window.location = fun.conf.hash.profile;
    }
});