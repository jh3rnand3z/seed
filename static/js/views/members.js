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
        'use strict';
        var data,
            template;

        console.log('render members view');

        data = {
            'org': this.context,
            'name': false,
            'description': false
        };

        console.log("org = " + this.context);

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.members)
        )(data);

        this.$el.html(template);
        this.$el.show();
    },

    renderMembersPanel: function(org){
        console.log('render members list');
        'use strict';
        var template,
            membersPanel;

        if (org) {
            this.members = org.get("members");
        }

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.membersPanel)
        );

        membersPanel = this.$('#fun-members-panel');

        membersPanel.html(template);

        this.membersList = this.$('#members-list');
        
        this.$el.show();

        this.renderMemberRows();
    },

    renderMemberRows: function(){

        console.log('render member rows');

        'use strict';
        var i = 0,
            length,
            memberData,
            itemData,
            itemTemplate;

        length = this.members.length;

        if (length > 0){

            // da fuq dude?
            for ( i; i < length; ++i ) {

                memberData = {
                    'member': this.members[i]
                };

                itemData = _.extend(memberData, {i:i+1});

                console.log(itemData);

                var itemTemplate = _.template(
                    fun.utils.getTemplate(fun.conf.templates.memberRow)
                )(itemData);

                this.membersList.append(itemTemplate);
            }
        }

    },

    /*
    * Add member
    */
    addMember: function(){
        console.log("new member event");
    }
});