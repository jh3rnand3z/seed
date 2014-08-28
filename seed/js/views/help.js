fun.views.help = Backbone.View.extend({

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
        fun.containers.help = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render help view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.help));

        this.$el.html(template);
        this.$el.show();
    }
});