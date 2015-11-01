/*物业后台全局配置*/
var GLOBAL_APIHOST='/web/';

var protocol = window.location.protocol + '//',
    host = window.location.host,
    apiHost=GLOBAL_APIHOST,
    baseUrl = protocol + host +'/web/';

window.baseUrl = baseUrl;
window.apiHost = apiHost;