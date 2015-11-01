define('static/js/index', ['components/util/deviceSetting', 'spm_modules/zepto/zepto', 'spm_modules/cookie/cookie', 'components/navigation/navigation', 'components/util/App', 'components/login_section/login_section', 'components/register_section/register_section', 'components/userCenter_section/userCenter_section', 'components/main_section/main_section'], function (require, exports, module) {

    //初始化app的native设置
    require('components/util/deviceSetting');
    //require('components/util/utilRouter');

    var $ = require('spm_modules/zepto/zepto');
    var cookie = require('spm_modules/cookie/cookie');
    var navigation = require('components/navigation/navigation');
    var App=require('components/util/App');

    window.userObj = JSON.parse(cookie('get', 'userObj'));     // 全局登录信息

    require('components/login_section/login_section');
    require('components/register_section/register_section');
    require('components/userCenter_section/userCenter_section');
    require('components/main_section/main_section');

    // 退出
    $('body').on('click', '#logout', function (event) {
        var $this = $(this);
        if ($this.hasClass('disable')) {
            return false;
        }
        if (event) {
            event.preventDefault();
        }
        $.ajax({
            url: apiHost + '/web/logout',
            dataType: 'json',
            success: function (data) {
                if (data.status == 1) {
                    J.Router.goTo('#login_section');
                } else {
                    J.showToast(data.detail, 'error');
                }
            },
            beforeSend: function () {
                $this.addClass('disable');
            },
            complete: function () {
                $this.removeClass('disable');
            }
        });

    });

    var $aside = $('#section_container');
    $aside.load(window.baseUrl+'/components/login_section/login_section.html',function(html){
        App.run();
    });

});