/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */
define('components/login_section/login_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var userObj={account:{}};

    App.page('login', function () {
        this.init = function () {

            if (cookie('get', 'userObj')) {
                userObj = JSON.parse(cookie('get', 'userObj'));
            }
            //检测登录
            //$.ajax({
            //    url: apiHost + 'login/checkLoginStatus.do',
            //    dataType: 'json',
            //    success: function (data) {
            //        if (data.status == 1) {
            //            //已经登录
            //            J.Router.goTo('#areaList_section');
            //        } else if (data.status == '-99') {
            //            J.Router.goTo('#login_section');
            //            //根据缓存自动填写手机号
            //            if (userObj.account && userObj.account.mobile) {
            //                $('.input-cellphone').val(userObj.account.mobile);
            //            }
            //
            //        } else {
            //            //J.showToast(data.detail, 'error');
            //        }
            //
            //    },
            //    beforeSend: function () {
            //
            //    },
            //    complete: function () {
            //
            //    }
            //});
            if (userObj.account && userObj.account.mobile) {
                $('.input-cellphone').val(userObj.account.mobile);
            }
            $('.btn-login').on('tap', function () {
                //J.Router.goTo('#areaList_section');
                var $this = $(this);
                if ($this.hasClass('disable')) {
                    return false;
                }
                J.Router.goTo('#main_section');
                //$.ajax({
                //    url: apiHost + 'user/loginHtml5.do',
                //    data: $('#login_form').serialize(),
                //    dataType: 'json',
                //    success: function (data) {
                //        if (data.status == 1) {
                //            J.Router.goTo('#main_section');
                //            userObj.account = data.data;
                //            userObj.account.key = data.key;
                //            window.userObj=userObj;
                //            //缓存到本地
                //            cookie('set', 'userObj', JSON.stringify(userObj));
                //
                //        } else if (data.status == '-99') {
                //            J.Router.goTo('#login_section');
                //        } else {
                //            J.showToast(data.detail, 'error');
                //        }
                //
                //    },
                //    beforeSend: function () {
                //        $this.addClass('disable').html('登录中...');
                //    },
                //    complete: function () {
                //        $this.removeClass('disable').html('登录');
                //    }
                //});
                return false;
            });
        }
    });
});