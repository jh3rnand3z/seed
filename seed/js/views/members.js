fun.views.members = Backbone.View.extend({

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
        fun.containers.members = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render members view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.members));

        this.$el.html(template);
        this.$el.show();
    }
});