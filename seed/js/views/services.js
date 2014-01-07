fun.views.services = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.services = this.$el;
    },
    
    /*
    * Render the services view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.services));
            this.$el.html(template);
        }
        this.$el.show();
    }

});
