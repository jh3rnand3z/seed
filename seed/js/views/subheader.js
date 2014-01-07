fun.views.subheader = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /**
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.subheader = this.$el;
    },
    
    /**
     * Render the subheader view
     */
    render : function(header){
        if(header){
            this.header = header;
        } else {
            this.header = 'nonsense';
        }

        var data = {
            header:this.header
        };

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.subheader))(data);

        this.$el.html(template);
        this.$el.show();
    }

});
