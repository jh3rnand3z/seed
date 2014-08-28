fun.views.profile = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    // click events missing
    events: {

    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.profile = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render profile view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.profile));

        this.$el.html(template);
        this.$el.show();

        var cal = new CalHeatMap();
        cal.init({
            domain: "month",
			subDomain: "day",
			cellSize: 11, 
			range: 12,
			legendVerticalPosition: "center",
			legendOrientation: "vertical",
			legendMargin: [0, 20, 0, 0],
			displayLegend: true,
			
			label: {
				position: "top"
			}
        });
    }
});