/*
 Configuration seed
*/
fun.conf = {
    account: 'account',
    urlRoot: '/api/',

    html: '/static/html/',
    domain: 'iofun.io',

    uuidRecord: 'record_uuid',
    uuidBilling: 'billing_uuid',
    uuidCampaign: 'campaign_uuid',
    uuidContact: 'contact_uuid',
    uuidDirectory: 'directory_uuid',
    uuidSound: 'sound_uuid',

    lapse: 'lapse',          

    startTime: 'start_time',
    endTime: 'end_time',

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
 Configuration SIP WS
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
};

/*
 Current JsSIP configuration
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

    user: fun.utils.format('/users/%s', fun.conf.account),
    users: '/users',

    org: '/orgs/' + fun.conf.account,
    orgs: '/orgs/',

    record: '/records/' + fun.conf.uuidRecord,
    records: '/records',

    billing: '/billings/' + fun.conf.uuidBilling,
    billings: '/billings',
    
    summary: '/records/summary',
    summaries: '/records/summaries',

    summaryStart: '/records/summary/start/' + fun.conf.startTime,
    summaryStartEnd: '/records/summary/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    summariesStart: '/records/summaries/start/' + fun.conf.startTime,
    summariesStartEnd: '/records/summaries/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    lapseSummary: '/records/summary/' + fun.conf.lapse,
    lapseSummaries: '/records/summaries/' + fun.conf.lapse,

    lapseSummaryStart: '/records/summary/' + fun.conf.lapse + '/start/' + fun.conf.startTime,
    lapseSummaryStartEnd: '/records/summary/' + fun.conf.lapse + '/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    lapseSummariesStart: '/records/summaries/' + fun.conf.lapse + '/start/' + fun.conf.startTime,
    lapseSummariesStartEnd: '/records/summaries/' + fun.conf.lapse + '/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,


    recordsStart: '/records/start/' + fun.conf.startTime,
    recordsStartEnd: '/records/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    billingsRecord: '/billings/records/' + fun.conf.uuidRecord,
    billingsRecords: '/billings/records/',
    
    billingsStart: '/billings/start/' + fun.conf.startTime,
    billingsStartEnd: '/billings/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    billingsRecordsStart: '/billings/records/start/' + fun.conf.startTime,
    billingsRecordsStartEnd: '/billings/records/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,


    /*contacts, sounds, recordings*/

};

/*
 HTML templates
*/
fun.conf.templates = {
    navbar: fun.utils.format('%s/navbar.html', fun.conf.html),
    
    navLanding: fun.conf.html + '/navLanding.html',
    navDashboard: fun.conf.html + '/navDashboard.html',
    
    navAdmin: fun.conf.html + '/navAdmin.html', // ultimate junk!

    subheader: fun.conf.html + '/subheader.html',
    headNav: fun.conf.html + '/headNav.html',
    headNavCampaigns: fun.conf.html + '/headNavCampaigns.html',
    headNavReports: fun.conf.html + '/headNavReports.html',
    
    landing: fun.conf.html + '/landing.html',
    
    support: fun.conf.html + '/support.html',
    contact: fun.conf.html + '/contact.html',
    features: fun.conf.html + '/features.html',
    enterprise: fun.conf.html + '/enterprise.html',
    howto: fun.conf.html + '/howto.html',
    status: fun.conf.html + '/status.html',
    developers: fun.conf.html + '/developers.html',
    help: fun.conf.html + '/help.html',
    security: fun.conf.html + '/security.html',
    terms: fun.conf.html + '/terms.html',

    privacy: fun.conf.html + '/privacy.html',

    
    signup: fun.conf.html + '/signup.html',

    login: fun.conf.html + '/login.html',
    
    dashboard: fun.conf.html + '/dashboard.html',

    orgs: fun.conf.html + '/orgs.html',
    campaigns: fun.conf.html + '/campaigns.html',
    
    recordRow: fun.conf.html + '/recordRow.html',
    typeRow: fun.conf.html + '/typeRow.html',
    sumRow: fun.conf.html + '/sumRow.html',

    lastRecord: fun.conf.html + '/lastRecord.html',
    latestRecords: fun.conf.html + '/latestRecords.html',

    recordType: fun.conf.html + '/recordType.html',  
    recordSummary: fun.conf.html + '/recordSummary.html',

    todaySummary: fun.conf.html + '/todaySummary.html',
    todayActivityChart: fun.conf.html + '/todayActivityChart.html',

    dialpad: fun.conf.html + '/dialpad.html',
    
    messages: fun.conf.html + '/messages.html',
    videos: fun.conf.html + '/videos.html',

    controlTo: fun.conf.html + '/controlTo.html',
    controlFrom: fun.conf.html + '/controlFrom.html',
    findLapse: fun.conf.html + '/findLapse.html',
    
    message: fun.conf.html + '/message.html',
    messageSmall: fun.conf.html + '/messageSmall.html',
    messageMedium: fun.conf.html + '/messageMedium',
    messageLarge: fun.conf.html + '/messageLarge',

    warning: fun.conf.html + '/warning.html',
    warningSmall: fun.conf.html + '/warningSmall.html',
    warningMedium: fun.conf.html + '/warningMedium.html',
    warningLarge: fun.conf.html + '/warningLarge.html',

    error: fun.conf.html + '/error.html',
    errorSmall: fun.conf.html + '/errorSmall.html',
    errorMedium: fun.conf.html + '/errorMedium.html',
    errorLarge: fun.conf.html + '/errorLarge.html',

    phone: fun.conf.html + '/phone.html',

    profile: fun.conf.html + '/profile.html',

    activity: fun.conf.html + '/activity.html',
    members: fun.conf.html + '/members.html',
    teams: fun.conf.html + '/teams.html',

    contacts: fun.conf.html + '/contacts.html',
    sounds: fun.conf.html + '/sounds.html',
    recordings: fun.conf.html + '/recordings.html',
    reports: fun.conf.html + '/reports.html',
    settings: fun.conf.html + '/settings.html',

    extra: fun.conf.html + '/extra.html',
    extraNavbar: fun.conf.html + '/extraNavbar.html',
    extraNavLanding: fun.conf.html + '/extraNavLanding.html',
    extraNavDashboard: fun.conf.html + '/extraNavDashboard.html',
    
    social: fun.conf.html + '/social.html',
    subscribe: fun.conf.html + '/subscribe.html',

    footer: fun.conf.html + '/footer.html'
};

/*
 Hash tags for backbone.js router
*/
fun.conf.hash = {
    home: '#home',
    landing : '#landing',
    howto: '#howto',
    features: '#features',
    enterprise: '#enterprise',
    terms: '#terms',
    privacy: '#privacy',
    security: '#security',
    status: '#status',
    developers: '#developers',
    help: '#help',
    support: '#support',
    contact: '#contact',
    signup : '#signup',
    login : '#login',
    dashboard : '#dashboard',
    orgs: '#orgs',
    campaigns: '#campaigns',
    profile: '#profile',
    activity: '#activity',
    members: '#members',
    teams: '#teams',
    phone: '#phone',
    reports : '#reports',
    contacts: '#contacts',
    sounds: '#sounds',
    recordings: '#recordings',
    settings : '#settings'
};