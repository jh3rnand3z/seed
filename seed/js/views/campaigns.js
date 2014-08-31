fun.views.campaigns = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    // click events missing
    events: {

    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.campaigns = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render campaigns view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.campaigns));

        this.$el.html(template);
        this.$el.show();
    }
});