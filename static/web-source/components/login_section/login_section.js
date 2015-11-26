/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */
define(function (require, exports, module) {
    var $=require('zepto');
    var J=require('jingle');
    var cookie=require('cookie');
    var App=require('App');
    var xhr=require('xhr');
    var signals=require('signals');

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
                                J.showToast('该账号还没有注册，请先注册！','error');
                            }else{
                                J.showToast(data.msg,'error');
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
                    J.showToast('请完善信息！','error');
                }

                return false;
            });
        }
    });
});