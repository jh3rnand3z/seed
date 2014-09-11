/*
 Configuration seed
*/
fun.conf = {
    account: 'account',
    urlRoot: '/api/',

    html: '/static/html',
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

    org: fun.utils.format('/orgs/%s', fun.conf.account),
    orgs: '/orgs/',

    record: fun.utils.format('/records/%s', fun.conf.uuidRecord),
    records: '/records',

    billing: fun.utils.format('/billings/%s', fun.conf.uuidBilling),
    billings: '/billings',
    
    summary: '/records/summary',
    summaries: '/records/summaries',

    summaryStart: fun.utils.format('/records/summary/start/%s', fun.conf.startTime),
    summaryStartEnd: fun.utils.format('/records/summary/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),

    summariesStart: fun.utils.format('/records/summaries/start/%s', fun.conf.startTime),
    summariesStartEnd: '/records/summaries/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    lapseSummary: fun.utils.format('/records/summary/%s', fun.conf.lapse),
    lapseSummaries: fun.utils.format('/records/summaries/%s', fun.conf.lapse),

    lapseSummaryStart: '/records/summary/' + fun.conf.lapse + '/start/' + fun.conf.startTime,
    lapseSummaryStartEnd: '/records/summary/' + fun.conf.lapse + '/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    lapseSummariesStart: '/records/summaries/' + fun.conf.lapse + '/start/' + fun.conf.startTime,
    lapseSummariesStartEnd: '/records/summaries/' + fun.conf.lapse + '/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,


    recordsStart: fun.utils.format('/records/start/%s', fun.conf.startTime),
    recordsStartEnd: '/records/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    billingsRecord: fun.utils.format('/billings/records/%s', fun.conf.uuidRecord),
    billingsRecords: '/billings/records/',
    
    billingsStart: fun.utils.format('/billings/start/%s', fun.conf.startTime),
    billingsStartEnd: '/billings/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,

    billingsRecordsStart: fun.utils.format('/billings/records/start/%s', fun.conf.startTime),
    billingsRecordsStartEnd: '/billings/records/start/' + fun.conf.startTime + '/end/' + fun.conf.endTime,


    /*contacts, sounds, recordings*/

};

/*
 HTML templates
*/
fun.conf.templates = {
    navbar: fun.utils.format('%s/navbar.html', fun.conf.html),
    
    navLanding: fun.utils.format('%s/navLanding.html', fun.conf.html),
    navDashboard: fun.utils.format('%s/navDashboard.html', fun.conf.html),
    
    navAdmin: fun.utils.format('%s/navAdmin.html', fun.conf.html), // ultimate junk!

    subheader: fun.utils.format('%s/subheader.html', fun.conf.html),
    headNav: fun.utils.format('%s/headNav.html', fun.conf.html),
    headNavCampaigns: fun.utils.format('%s/headNavCampaigns.html', fun.conf.html),
    headNavReports: fun.utils.format('%s/headNavReports.html', fun.conf.html),
    
    landing: fun.utils.format('%s/landing.html', fun.conf.html),
    
    support: fun.utils.format('%s/support.html', fun.conf.html),
    contact: fun.utils.format('%s/contact.html', fun.conf.html),
    features: fun.utils.format('%s/features.html', fun.conf.html),
    enterprise: fun.utils.format('%s/enterprise.html', fun.conf.html),
    howto: fun.utils.format('%s/howto.html', fun.conf.html),
    status: fun.utils.format('%s/status.html', fun.conf.html),
    developers: fun.utils.format('%s/developers.html', fun.conf.html),
    help: fun.utils.format('%s/help.html', fun.conf.html),
    security: fun.utils.format('%s/security.html', fun.conf.html),
    terms: fun.utils.format('%s/terms.html', fun.conf.html),

    privacy: fun.utils.format('%s/privacy.html', fun.conf.html),

    
    signup: fun.utils.format('%s/signup.html', fun.conf.html),

    login: fun.utils.format('%s/login.html', fun.conf.html),
    
    dashboard: fun.utils.format('%s/dashboard.html', fun.conf.html),

    orgs: fun.utils.format('%s/orgs.html', fun.conf.html),
    campaigns: fun.utils.format('%s/campaigns.html', fun.conf.html),
    
    recordRow: fun.utils.format('%s/recordRow.html', fun.conf.html),
    typeRow: fun.utils.format('%s/typeRow.html', fun.conf.html),
    sumRow: fun.utils.format('%s/sumRow.html', fun.conf.html),

    lastRecord: fun.utils.format('%s/lastRecord.html', fun.conf.html),
    latestRecords: fun.utils.format('%s/latestRecords.html', fun.conf.html),

    recordType: fun.utils.format('%s/recordType.html', fun.conf.html),
    recordSummary: fun.utils.format('%s/recordSummary.html', fun.conf.html),

    todaySummary: fun.utils.format('%s/todaySummary.html', fun.conf.html),
    todayActivityChart: fun.utils.format('%s/todayActivityChart.html', fun.conf.html),

    dialpad: fun.utils.format('%s/dialpad.html', fun.conf.html),
    
    messages: fun.utils.format('%s/messages.html', fun.conf.html),
    videos: fun.utils.format('%s/videos.html', fun.conf.html),

    controlTo: fun.utils.format('%s/controlTo.html', fun.conf.html),
    controlFrom: fun.utils.format('%s/controlFrom.html', fun.conf.html),
    findLapse: fun.utils.format('%s/findLapse.html', fun.conf.html),
    
    message: fun.utils.format('%s/message.html', fun.conf.html),
    messageSmall: fun.utils.format('%s/messageSmall.html', fun.conf.html),
    messageMedium: fun.utils.format('%s/messageMedium', fun.conf.html),
    messageLarge: fun.utils.format('%s/messageLarge', fun.conf.html),

    warning: fun.utils.format('%s/warning.html', fun.conf.html),
    warningSmall: fun.utils.format('%s/warningSmall.html', fun.conf.html),
    warningMedium: fun.utils.format('%s/warningMedium.html', fun.conf.html),
    warningLarge: fun.utils.format('%s/warningLarge.html', fun.conf.html),

    error: fun.utils.format('%s/error.html', fun.conf.html),
    errorSmall: fun.utils.format('%s/errorSmall.html', fun.conf.html),
    errorMedium: fun.utils.format('%s/errorMedium.html', fun.conf.html),
    errorLarge: fun.utils.format('%s/errorLarge.html', fun.conf.html),

    phone: fun.utils.format('%s/phone.html', fun.conf.html),

    profile: fun.utils.format('%s/profile.html', fun.conf.html),

    activity: fun.utils.format('%s/activity.html', fun.conf.html),
    members: fun.utils.format('%s/members.html', fun.conf.html),
    teams: fun.utils.format('%s/teams.html', fun.conf.html),

    contacts: fun.utils.format('%s/contacts.html', fun.conf.html),
    sounds: fun.utils.format('%s/sounds.html', fun.conf.html),
    recordings: fun.utils.format('%s/recordings.html', fun.conf.html),
    reports: fun.utils.format('%s/reports.html', fun.conf.html),
    settings: fun.utils.format('%s/settings.html', fun.conf.html),

    extra: fun.utils.format('%s/extra.html', fun.conf.html),
    extraNavbar: fun.utils.format('%s/extraNavbar.html', fun.conf.html),
    extraNavLanding: fun.utils.format('%s/extraNavLanding.html', fun.conf.html),
    extraNavDashboard: fun.utils.format('%s/extraNavDashboard.html', fun.conf.html),
    
    social: fun.utils.format('%s/social.html', fun.conf.html),
    subscribe: fun.utils.format('%s/subscribe.html', fun.conf.html),

    footer: fun.utils.format('%s/footer.html', fun.conf.html)
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