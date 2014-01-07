fun.views.frags = Backbone.View.extend({

    events: {
       
    },

    initialize : function(options) {
        fun.containers.frags = this.$el;
    },
    
    render : function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.frags)
        );
        this.$el.html(template);
        this.$el.show();
    }

});