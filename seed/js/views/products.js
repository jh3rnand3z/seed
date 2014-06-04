fun.views.products = Backbone.View.extend({

    /*
    * Bind the events to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.products = this.$el;
    },
    
    /*
    * Render the products view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.products));
            this.$el.html(template);
        }
        this.$el.show();
    }

});
