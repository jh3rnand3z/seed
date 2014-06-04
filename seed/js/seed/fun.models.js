/*
 Seed models configuration 
*/

fun.models.Account = Backbone.Model.extend({
    urlRoot : fun.conf.urls.users
});


fun.models.login = Backbone.Model.extend({

    urlRoot : fun.conf.urls.login,

    url: function(){
        return this.urlRoot;
    }
});


fun.models.logout = Backbone.Model.extend({

    urlRoot : fun.conf.urls.logout,

    url: function(){
        return this.urlRoot;
    }
});


fun.models.User = Backbone.Model.extend({

    idAttribute: 'uuid',
    
    initialize: function(options) {
        this.account = options.account;
    },
    
    urlRoot: fun.conf.urls.user,
    
    url: function(){
        var url = this.urlRoot.replace(fun.conf.account, this.account);
        if (!this.isNew()){
            url += '/' + this.id;
        }
        return url;
    },
    
    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
}); 


fun.models.Users = Backbone.Collection.extend({

    model: fun.models.User,
    
    urlRoot: fun.conf.urls.users,
    
    url: function(){
        return this.urlRoot;
    },
    
    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});


fun.models.Record = Backbone.Model.extend({

    idAttribute: 'uuid',

    initialize: function(options) {
        this.recordId = options.recordId;
    },
    
    urlRoot: fun.conf.urls.record,
    
    url: function() {
        var url = this.urlRoot.replace(fun.conf.recordId, this.recordId);
        if (!this.isNew()){
            url += '/' + this.id;
        }
        return url;
    },
    
    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});


fun.models.Records = Backbone.Collection.extend({
    
    model: fun.models.Record,
    
    urlRoot: fun.conf.urls.records,
    
    url: function() {
        return this.urlRoot;
    },
    
    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },
    
    parse: function(response) {
        return response.results;
    }
});


fun.models.RecordsStart = Backbone.Collection.extend({
    
    model: fun.models.Record,

    initialize: function(options){
        this.start = options.start;
    },

    urlRoot: fun.conf.urls.recordsStart,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        url = url.replace(fun.conf.start, this.start);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },

    parse: function(response){
        return response.results;
    }
});


fun.models.RecordsStartStop = Backbone.Collection.extend({
    
    model: fun.models.Record,

    initialize: function(options){
        this.start = options.start;
        this.stop = options.stop;
    },

    urlRoot: fun.conf.urls.recordsStartStop,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        url = url.replace(fun.conf.stop, this.stop);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },

    parse: function(response){
        return response.results;
    }
});


fun.models.LapseSummary = Backbone.Model.extend({

    idAttribute: 'uuid',
    
    initialize: function(options) {
        this.lapse = options.lapse;
    },
    
    urlRoot: fun.conf.urls.lapseSummary,
    
    url: function(){
        var url = this.urlRoot.replace(fun.conf.lapse, this.lapse);
        return url;
    },
    
    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});


fun.models.LapseSummaries = Backbone.Collection.extend({
    
    model: fun.models.LapseSummary,

    initialize: function(options) {
        this.lapse = options.lapse;
    },

    urlRoot: fun.conf.urls.lapseSummaries,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.lapse, this.lapse);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },

    parse: function(response){
        return response.results;
    }
});


fun.models.LapseSummaryStart = Backbone.Model.extend({

    idAttribute: 'uuid',

    initialize: function(options){
        this.lapse = options.lapse;
        this.start = options.start;
    },

    urlRoot: fun.conf.urls.lapseSummaryStart,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.lapse, this.lapse);
        url = url.replace(fun.conf.start, this.start);
        return url;
    },

    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }

});


fun.models.LapseSummaryStartStop = Backbone.Model.extend({

    idAttribute: 'uuid',
    
    initialize: function(options){
        this.lapse = options.lapse;
        this.start = options.start;
        this.stop = options.stop;
    },

    urlRoot: fun.conf.urls.lapseSummaryStartStop,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.lapse, this.lapse);
        url = url.replace(fun.conf.start, this.start);
        url = url.replace(fun.conf.stop, this.stop);
        return url;
    },

    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }

});


fun.models.Summary = Backbone.Model.extend({

    idAttribute: 'uuid',
    
    urlRoot: fun.conf.urls.summary,
    
    url: function(){
        return this.urlRoot;
    },
    
    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});


fun.models.Summaries = Backbone.Collection.extend({
   
    model: fun.models.Summary,

    urlRoot: fun.conf.urls.summaries,

    url: function(){
        return this.urlRoot;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },

    parse: function(response){
        return response.results;
    }
});


fun.models.SummaryStart = Backbone.Model.extend({

    idAttribute: 'uuid',

    initialize: function(options){
        this.start = options.start;
    },

    urlRoot: fun.conf.urls.summaryStart,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }

});


fun.models.SummariesStart = Backbone.Collection.extend({
   
    model: fun.models.SummaryStart,

    initialize: function(options){
        this.start = options.start;
    },

    urlRoot: fun.conf.urls.summariesStart,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },

    parse: function(response){
        return response.results;
    }
});


fun.models.SummaryStartStop = Backbone.Model.extend({

    idAttribute: 'uuid',

    initialize: function(options){
        this.start = options.start;
        this.stop = options.stop;
    },

    urlRoot: fun.conf.urls.summaryStartStop,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        url = url.replace(fun.conf.stop, this.stop);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});


fun.models.SummariesStartStop = Backbone.Collection.extend({
   
    model: fun.models.SummaryStartStop,

    initialize:function(options){
        this.start = options.start;
        this.stop = options.stop;
    },

    urlRoot: fun.conf.urls.summariesStartStop,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        url = url.replace(fun.conf.stop, this.stop);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },

    parse: function(response){
        return response.results;
    }
});


fun.models.Billing = Backbone.Model.extend({

    idAttribute: 'uuid',
    
    urlRoot: fun.conf.urls.billing,
    
    url: function(){
        return this.urlRoot;
    },
    
    sync: function(method, model, options) {
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});


fun.models.Billings = Backbone.Collection.extend({

    model: fun.models.Billing,

    urlRoot: fun.conf.urls.billings,

    url: function(){
        return this.urlRoot;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    },

    parse: function(response){
        return response.results;
    }
});


fun.models.BillingStart = Backbone.Model.extend({

    idAttribute: 'uuid',

    initialize: function(options){
        this.start = options.start;
    },

    urlRoot: fun.conf.urls.billingStart,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});


fun.models.BillingStartStop = Backbone.Model.extend({

    idAttribute: 'uuid',

    initialize: function(options){
        this.start = options.start;
        this.stop = options.stop;
    },

    urlRoot: fun.conf.urls.billingStartStop,

    url: function(){
        var url = this.urlRoot.replace(fun.conf.start, this.start);
        url = url.replace(fun.conf.stop, this.stop);
        return url;
    },

    sync: function(method, model, options){
        options.contentType = 'application/json';
        return Backbone.sync(method, model, options);
    }
});