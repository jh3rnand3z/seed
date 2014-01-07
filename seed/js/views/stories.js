fun.views.stories = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.stories = this.$el;
    },
    
    /**
     * Render the stories view
     */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.stories));
            this.$el.html(template);
        }
        this.$el.show();
    }

});
