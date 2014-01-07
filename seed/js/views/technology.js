fun.views.technology = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.technology = this.$el;
    },
    
    /**
     * Render the technology view
     */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.technology));
            this.$el.html(template);
        }
        this.$el.show();
    }

});
