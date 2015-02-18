fun.views.orgs = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #new-org-btn': 'newORG',
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.orgs = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render orgs view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.orgs));

        this.$el.html(template);
        this.$el.show();
    },

    newORG: function(event){
        event.preventDefault();
        console.log('new org event');
    }
});