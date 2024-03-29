fun.views.sounds = Backbone.View.extend({

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
        fun.containers.sounds = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render sounds view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.sounds));

        this.$el.html(template);
        this.$el.show();
    }
});