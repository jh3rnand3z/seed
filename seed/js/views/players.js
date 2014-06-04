fun.views.players = Backbone.View.extend({

    events: {

    },

    initialize : function(options) {
        fun.containers.players = this.$el;
    },
    
    render : function(){
        console.log('render players view');

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.players)
        );
        this.$el.html(template);
        this.$el.show();
    }
});