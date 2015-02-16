fun.views.contacts = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {

    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.contacts = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render contacts view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.contacts));

        this.$el.html(template);
        this.$el.show();

        $("#new-phone-number").intlTelInput();
    },

    renderContactLists: function(contacts){
        console.log('render contact lists');
        if (contacts) {
            this.contacts = contacts;
        }

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.allContacts)
        );

        var allContacts = this.$('#all-contacts-tab');

        allContacts.html(template);

        this.tbody = this.$('#contacts-list > tbody');
        this.$el.show();
        this.renderContactRows();
    },

    renderContactRows: function(){
        var i = 0;
        var length = this.contacts.length;

        if (length > 0){
            var rows = this.tbody.html('');
            for (i; i < 20; ++i) {
                var data = _.extend(this.contacts.at(i).toJSON(), {i:i});

                var template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.contactRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noContacts();
        }
    },

    noContacts: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        var noContacts = this.$('#no-contacts');

        noContacts.html(template);
    },

    renderDirectoryLists: function(directories){
        console.log('render directory lists');
        if (directories) {
            this.directories = directories;
        }

        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.directoryList)
        );

        var directoryList = this.$('#directories-tab');

        directoryList.html(template);

        this.dtbody = this.$('#directory-list > tbody');
        this.$el.show();
        this.renderDirectoryRows();
    },

    renderDirectoryRows: function(){
        var i = 0;
        var length = this.directories.length;

        if (length > 0){
            var rows = this.dtbody.html('');
            for (i; i < 20; ++i) {
                var data = _.extend(this.directories.at(i).toJSON(), {i:i});

                console.log(data);

                var template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.directoryRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noDirectories();
        }
    },

    noDirectories: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        var noContacts = this.$('#no-directories');

        noContacts.html(template);
    }
});