/**
 * Created by 001425 on 2015/6/24.
 */
define(function (require, exports, module) {
    var currUrl=window.location.href,
        cookie = require('cookie');

    var $loginInfo = cookie('get', 'userObj');
    if (!$loginInfo) {
        window.location.href=window.baseUrl+'/index.html#/login';
        return true;
    }

    if(currUrl==window.baseUrl+'/'||currUrl==window.baseUrl+'/index.html'){

        window.location.href=window.baseUrl+'/index.html#/main';

    }
});