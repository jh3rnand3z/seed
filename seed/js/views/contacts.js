fun.views.contacts = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {

    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.contacts = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render contacts view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.contacts));

        this.$el.html(template);
        this.$el.show();
    }
});