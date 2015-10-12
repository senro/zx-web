/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/9/7
 * Time: 19:23
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    //初始化消息接收器
    var message=require('message');
    message.init();
    //set statusBar
    require('components/cordova/statusBar/setStatusBar.js');

    require('components/util/utilRouter.js');
    var router = require('router');
    var cookie = require('cookie');
    window.userObj = JSON.parse(cookie('get', 'userObj'));     // 全局登录信息

    router();
});