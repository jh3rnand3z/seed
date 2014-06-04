fun.views.community = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.community = this.$el;
    },
    
    /**
     * Render the community view
     */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.community));
            this.$el.html(template);
        }
        this.$el.show();
    }

});
