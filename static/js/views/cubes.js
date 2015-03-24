fun.views.cubes = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.cubes = this.$el;
    },
    
    /*
    * Render the cubes view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.cubes));
            this.$el.html(template);
        }
        this.$el.show();
    }

});
