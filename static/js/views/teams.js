fun.views.teams = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #new-team-btn': 'addTeam',
    },

    /*
    * Class constructor
    */
    initialize: function(options){
        fun.containers.teams = this.$el;
        // get username account from localStorage
        this.account = localStorage.getItem("username");
    },

    /*
    * Render view
    */
    render: function(org){
        'use strict';
        var data,
            context,
            template;

        console.log('render teams view');

        context = sessionStorage.getItem("context");

        if (org){
            this.teams = org.get("teams");
        }

        data = {
            'org': context,
            'name': false,
            'description': false
        };

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.teams)
        )(data);

        this.$el.html(template);
        this.teamsList = this.$('#teams-list');
        this.$el.show();
        this.renderTeamRows();
    },

    renderTeamRows: function(){
        console.log('render team rows');
    },

    /*
    * Add team
    */
    addTeam: function(){
        console.log("new team event");
    }
});