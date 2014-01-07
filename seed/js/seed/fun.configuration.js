/*
 Configuration seed
*/
fun.conf = {
    account: 'account',

    urlRoot: '/api/',

    applications: '/static/applications/',
    domain: 'ph3nix.com',

    seedApplication: 'toronja',

    uuidApplication: 'application_uuid',
    uuidRecord: 'record_uuid',
    uuidBilling: 'billing_uuid',
   
    lapse: 'lapse',          

    start: 'start',            
    stop: 'stop',

    first: 'first',
    last: 'last',

    next: 'next',
    previous: 'previous',

    pageNumber: 'page_number',
    pageSize: 'page_size',
    pageSmall: 8,
    pageMedium: 13,
    pageBig: 21
};

/*
 Configuration stuff for daemons
*/
fun.conf.daemons = {
    ws_server: 'ws://' + fun.conf.domain,
    ws_port: '10080',
    stun_port: '19302',
    turn_port: '',
    stun_server: 'stun.' + fun.conf.domain,
    turn_server: 'turn.' + fun.conf.domain,
    sip_server: 'sip.' + fun.conf.domain
};

/*
 Common timeouts
*/
fun.conf.timeouts = {
    big: 60000,
    medium: 15000,
    small: 5000
}

/*
 JsSIP client configuration
*/

fun.conf.sip = {
    registrar_server: fun.conf.daemons.sip_server,
    ws_servers: fun.conf.daemons.ws_server + fun.conf.daemons.ws_port,

    stun_servers: fun.conf.daemons.stun_server + ':' + fun.conf.daemons.stun_port,
    turn_servers: fun.conf.daemons.turn_server + ':' + fun.conf.daemons.turn_port,

    register: true,
    register_expires: '600',

    connection_recovery_min_interval: '3',
    connection_recovery_max_interval: '30',

    uri: 'sip:' + fun.conf.account + '@' + fun.conf.domain,
    password: '',

    display_name: 'Juan Monk',
    authorization_user: '',

    no_answer_timeout: '60',
    trace_sip: false,

    use_preloaded_route: false,

    hack_via_tcp: true,
    hacK_ip_in_contact: false
};

/*
 System urls
*/
fun.conf.urls = {
    login: '/login',
    logout: '/logout',

    user: '/users/' + fun.conf.account,
    users: '/users',
    
    org: '/orgs/' + fun.conf.account,
    orgs: '/orgs/',

    record: '/records/' + fun.conf.uuidRecord,
    records: '/records',

    billing: '/billings/' + fun.conf.uuidBilling,
    billings: '/billings',
    
    summary: '/records/summary',
    summaries: '/records/summaries',

    summaryStart: '/records/summary/start/' + fun.conf.start,
    summaryStartStop: '/records/summary/start/' + fun.conf.start + '/stop/' + fun.conf.stop,

    summariesStart: '/records/summaries/start/' + fun.conf.start,
    summariesStartStop: '/records/summaries/start/' + fun.conf.start + '/stop/' + fun.conf.stop,

    lapseSummary: '/records/summary/' + fun.conf.lapse,
    lapseSummaries: '/records/summaries/' + fun.conf.lapse,

    lapseSummaryStart: '/records/summary/' + fun.conf.lapse + '/start/' + fun.conf.start,
    lapseSummaryStartStop: '/records/summary/' + fun.conf.lapse + '/start/' + fun.conf.start + '/stop/' + fun.conf.stop,

    lapseSummariesStart: '/records/summaries/' + fun.conf.lapse + '/start/' + fun.conf.start,
    lapseSummariesStartStop: '/records/summaries/' + fun.conf.lapse + '/start/' + fun.conf.start + '/stop/' + fun.conf.stop,

    billingsRecord: '/billings/records/' + fun.conf.uuidRecord,
    billingsRecords: '/billings/records/',
    
    billingsStart: '/billings/start/' + fun.conf.start,
    billingsStartStop: '/billings/start/' + fun.conf.start + '/stop/' + fun.conf.stop,

    billingsRecordsStart: '/billings/records/start/' + fun.conf.start,
    billingsRecordsStartStop: '/billings/records/start/' + fun.conf.start + '/stop/' + fun.conf.stop,

    recordsStart: '/records/start/' + fun.conf.start,
    recordsStartStop: '/records/start/' + fun.conf.start + '/stop/' + fun.conf.stop
};

/*
 Templates box
*/
fun.conf.templates = {
    navbar: fun.conf.applications + fun.conf.seedApplication + '/navbar.html',
    
    navLanding: fun.conf.applications + fun.conf.seedApplication + '/navLanding.html',
    navDashboard: fun.conf.applications + fun.conf.seedApplication + '/navDashboard.html',
    navAdmin: fun.conf.applications + fun.conf.seedApplication + '/navAdmin.html',

    subheader: fun.conf.applications + fun.conf.seedApplication + '/subheader.html',
    
    landing: fun.conf.applications + fun.conf.seedApplication + '/landing.html',
    about: fun.conf.applications + fun.conf.seedApplication + '/about.html',
    stories: fun.conf.applications + fun.conf.seedApplication + '/stories.html',
    technology: fun.conf.applications + fun.conf.seedApplication + '/technology.html',
    community: fun.conf.applications + fun.conf.seedApplication + '/community.html',
    education: fun.conf.applications + fun.conf.seedApplication + '/education.html',
    products: fun.conf.applications + fun.conf.seedApplication + '/products.html',
    services: fun.conf.applications + fun.conf.seedApplication + '/services.html',
    support: fun.conf.applications + fun.conf.seedApplication + '/support.html',
    contact: fun.conf.applications + fun.conf.seedApplication + '/contact.html',
    
    signup: fun.conf.applications + fun.conf.seedApplication + '/signup.html',

    login: fun.conf.applications + fun.conf.seedApplication + '/login.html',
    
    dashboard: fun.conf.applications + fun.conf.seedApplication + '/dashboard.html',
    
    recordRow: fun.conf.applications + fun.conf.seedApplication + '/recordRow.html',
    typeRow: fun.conf.applications + fun.conf.seedApplication + '/typeRow.html',
    sumRow: fun.conf.applications + fun.conf.seedApplication + '/sumRow.html',

    lastRecord: fun.conf.applications + fun.conf.seedApplication + '/lastRecord.html',
    latestRecords: fun.conf.applications + fun.conf.seedApplication + '/latestRecords.html',

    recordType: fun.conf.applications + fun.conf.seedApplication + '/recordType.html',  
    recordSummary: fun.conf.applications + fun.conf.seedApplication + '/recordSummary.html',

    todaySummary: fun.conf.applications + fun.conf.seedApplication + '/todaySummary.html',
    todayActivityChart: fun.conf.applications + fun.conf.seedApplication + '/todayActivityChart.html',

    dialBox: fun.conf.applications + fun.conf.seedApplication + '/dialBox.html',
    
    messages: fun.conf.applications + fun.conf.seedApplication + '/messages.html',
    videos: fun.conf.applications + fun.conf.seedApplication + '/videos.html',

    controlTo: fun.conf.applications + fun.conf.seedApplication + '/controlTo.html',
    controlFrom: fun.conf.applications + fun.conf.seedApplication + '/controlFrom.html',
    findLapse: fun.conf.applications + fun.conf.seedApplication + '/findLapse.html',
    
    message: fun.conf.applications + fun.conf.seedApplication + '/message.html',
    mesSmall: fun.conf.applications + fun.conf.seedApplication + '/mesSmall.html',
    mesMedium: fun.conf.applications + fun.conf.seedApplication + '/mesMedium.html',
    mesLarge: fun.conf.applications + fun.conf.seedApplication + '/mesLarge.html',

    warning: fun.conf.applications + fun.conf.seedApplication + '/warning.html',
    warSmall: fun.conf.applications + fun.conf.seedApplication + '/warSmall.html',
    warMedium: fun.conf.applications + fun.conf.seedApplication + '/warMedium.html',
    warLarge: fun.conf.applications + fun.conf.seedApplication + '/warLarge.html',

    error: fun.conf.applications + fun.conf.seedApplication + '/error.html',
    errSmall: fun.conf.applications + fun.conf.seedApplication + '/errSmall.html',
    errMedium: fun.conf.applications + fun.conf.seedApplication + '/errMedium.html',
    errLarge: fun.conf.applications + fun.conf.seedApplication + '/errLarge.html',

    phone: fun.conf.applications + fun.conf.seedApplication + '/phone.html',
    recordings: fun.conf.applications + fun.conf.seedApplication + '/recordings.html',
    reports: fun.conf.applications + fun.conf.seedApplication + '/reports.html',
    settings: fun.conf.applications + fun.conf.seedApplication + '/settings.html',

    extra: fun.conf.applications + fun.conf.seedApplication + '/extra.html',
    extraNavbar: fun.conf.applications + fun.conf.seedApplication + '/extraNavbar.html',
    extraNavLanding: fun.conf.applications + fun.conf.seedApplication + '/extraNavLanding.html',
    extraNavDashboard: fun.conf.applications + fun.conf.seedApplication + '/extraNavDashboard.html',
    
    social: fun.conf.applications + fun.conf.seedApplication + '/social.html',
    subscribe: fun.conf.applications + fun.conf.seedApplication + '/subscribe.html',

    footer: fun.conf.applications + fun.conf.seedApplication + '/footer.html'
};

/*
 Hash tags for backbone.js router
*/
fun.conf.hash = {
    home: '#home',
    landing : '#landing',
    about: '#about',
    stories: '#stories',
    technology: '#technology',
    community: '#community',
    education: '#education',
    products: '#products',
    services: '#services',
    support: '#support',
    contact: '#contact',
    signup : '#signup',
    login : '#login',
    dashboard : '#dashboard',
    phone: '#phone',
    reports : '#reports',
    recordings: '#recordings',
    settings : '#settings'
};