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
            
            //this.campaignType = this.stuff.is.missing
            //this.campaignAccount = ?
            
            this.account = account;
        }
        this.$el.show();
    },

    /*
    * Render campaigns list
    */
    renderCampaignsList: function(campaigns){
        console.log('render campaigns list');
        if (campaigns) {
            this.campaigns = campaigns;
        }

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.allContacts)
        );

        var allContacts = this.$('#all-campaigns-tab');

        allContacts.html(template);

        this.tbody = this.$('#campaigns-list > tbody');
        this.$el.show();
        this.renderCampaignRows();
    },

    /*
    * Render campaign rows
    */
    renderCampaignRows: function(){
        // campaigns length
        var length = this.campaigns.length;
        var i = 0;
        console.log(length)
        if (length > 0){
            var rows = this.tbody.html('');
            for (i; i < length; ++i) {
                var data = _.extend(this.campaigns.at(i).toJSON(), {i:i});

                var template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.campaignRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noCampaigns();
        }
    },

    /*
    * No campaigns
    */
    noCampaigns: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        var noCampaigns = this.$('#no-campaigns');

        noCampaigns.html(template);
    },

    /*
    * Create campaign
    */
    createCampaign: function(event){
        'use strict';
        event.preventDefault();
        // view cache
        var view = this,
            account,
            campaign,
            campaignName,
            campaignDescription;

        console.log('create campaign event');

        account = this.account;

        campaignName = this.campaignName.val();

        campaignDescription = this.campaignDescription.val();

        console.log(account, campaignName, campaignDescription);

        campaign = new fun.models.Campaign({
            account: account,
            name: campaignName,
            description: campaignDescription
        });

        campaign.save();
        
        // Clear the stuff from the inputs ;)
        view.$('#campaign_name').val('');
        view.$('#campaign_description').val('');
    }
});