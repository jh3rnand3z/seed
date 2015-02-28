fun.views.teams = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #new-team-btn': 'addTeam',
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.teams = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render teams view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.teams));

        this.$el.html(template);
        this.$el.show();
    },

    /*
    * Add team
    */
    addTeam: function(){
        console.log("new team event");
    }
});