fun.views.members = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #new-member-btn': 'addMember',
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.members = this.$el;

        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render members view');

        //var template = _.template(fun.utils.getTemplate(fun.conf.templates.members));

        console.log("org = " + this.context)

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.members)
        )({'org':this.context});

        this.$el.html(template);
        this.$el.show();
    },

    renderMembersList: function(){
        console.log('render members list');
    },

    /*
    * Add member
    */
    addMember: function(){
        console.log("new member event");
    }
});