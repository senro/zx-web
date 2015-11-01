/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */
define('components/login_section/login_section', ['spm_modules/zepto/zepto', 'spm_modules/jingle/Jingle.debug.qymodify', 'spm_modules/cookie/cookie', 'components/util/App', 'spm_modules/xhr/xhr', 'components/signals/signals', 'components/cordova/geolocation/getCurrPos'], function (require, exports, module) {
    var $=require('spm_modules/zepto/zepto');
    var J=require('spm_modules/jingle/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/cookie');
    var App=require('components/util/App');
    var xhr=require('spm_modules/xhr/xhr');
    var signals=require('components/signals/signals');

    App.page('login', function () {
        this.init = function () {
            var $currSection=$('#login_section');
            //获取定位信息
            signals.getCurrPos.add(function(position){
                $('#Lng').val(position.coords.longitude);
                $('#Lat').val(position.coords.latitude);
            });
            window.parent.postMessage(require('components/cordova/geolocation/getCurrPos'),'*');

            $('.btn-login').click(function(){
                var $this = $(this);
                if ($this.hasClass('disable')) {
                    return false;
                }
                if($currSection.find('#username').val()!=''&&$currSection.find('#password').val()!=''){
                    $.ajax({
                        url:window.apiHost+'login',
                        type:'post',
                        data: $('#loginForm').serialize(),
                        success:function(data){
                            if(data.status==1){
                                $.ajax({
                                    url:window.apiHost+'getUserInfo',
                                    type:'get',
                                    success:function(data){
                                        if(data.status==1){
                                            J.Router.goTo('#main_section');
                                        }else{
                                            J.Router.goTo('#userCenter_section');
                                        }
                                    }
                                });

                            }else if(data.status==1001){
                                J.Router.goTo('#register_section');
                            }else{
                                alert(data.msg);
                            }
                        },
                        beforeSend: function () {
                            $this.addClass('disable').html('登录中...');
                        },
                        complete: function () {
                            $this.removeClass('disable').html('登录');
                        }
                    });
                }else{
                    alert('请完善信息！');
                }

                return false;
            });
        }
    });
});