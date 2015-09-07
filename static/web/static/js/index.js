/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/9/7
 * Time: 19:23
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    require('components/util/utilRouter.js');
    var router = require('router');
    var cookie = require('cookie');
    window.userObj = JSON.parse(cookie('get', 'userObj'));     // 全局登录信息

    router();
});