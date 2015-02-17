fun.views.contacts = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #upload-csv-btn': 'uploadCSV',
        'click #get-dir-btn': 'getDirectory',
        'click #add-contact-btn': 'addContact'
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
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.contacts));
            this.$el.html(template);
            // DOM cache stuff on form fields
            this.contactFirstName = this.$('#contact_first_name');
            this.contactLastName = this.$('#contact_last_name');
            this.newPhoneNumber = this.$('#new-phone-number');
            // directory fields
            this.directoryName = this.$('#directory_name');
            this.directoryDescription = this.$('#directory_description');
            // CSV input file
            this.exampleInputFile = this.$('#exampleInputFile');
        }
        this.newPhoneNumber.intlTelInput({
            utilsScript: "static/js/plugins/libphonenumber/utils.js"
        });
        this.$el.show();
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
        // contacts length
        var length = this.contacts.length;
        var i = 0;
        console.log(length)
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
        // directory length
        var length = this.directories.length;
        var i = 0;
        console.log(length)
        if (length > 0){
            var rows = this.dtbody.html('');
            //for (i; i < 20; ++i) {
            for (i; i < length; ++i) {

                var data = _.extend(this.directories.at(i).toJSON(), {i:i});

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
    },

    uploadCSV: function(event){
        event.preventDefault();
        console.log('uploadCSV event');
    },

    getDirectory: function(event){
        event.preventDefault();
        console.log('getDirectory event');
    },

    addContact: function(event){
        event.preventDefault();

        console.log('new contact event');

        var firstName = this.contactFirstName.val();

        var lastName = this.contactLastName.val();

        var newNumber = this.newPhoneNumber.intlTelInput("getNumber");

        var countryData = this.newPhoneNumber.intlTelInput("getSelectedCountryData");

        var numberType = this.newPhoneNumber.intlTelInput("getNumberType");

        var contact = new fun.models.Contact({
            first_name: firstName,
            last_name: lastName,
            phone_number: newNumber,
            number_type: numberType
        });

        contact.save();
    }
});