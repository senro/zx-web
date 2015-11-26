/**
 * Created with WebStorm.
 * User: qiuyun
 * Date: 15-9-4
 * Time: 下午6:39
 * To change this template use File | Settings | File Templates.
 */
define('components/register_section/register_section', ['spm_modules/zepto/zepto', 'spm_modules/jingle/Jingle.debug.qymodify', 'components/util/App', 'spm_modules/xhr/xhr', 'components/signals/signals', 'components/cordova/geolocation/getCurrPos'], function(require, exports, module){
    var $=require('spm_modules/zepto/zepto');
    var J=require('spm_modules/jingle/Jingle.debug.qymodify');
    var App=require('components/util/App');
    var xhr=require('spm_modules/xhr/xhr');

    var signals=require('components/signals/signals');

    App.page('register', function () {
        this.init = function () {
            var $currSection=$('#register_section');
            //获取定位信息
            signals.getCurrPos.add(function(position){
                //alert('获取地理位置成功：'+position.coords.longitude+','+position.coords.latitude);
                $('#Lng').val(position.coords.longitude);
                $('#Lat').val(position.coords.latitude);
            });
            window.parent.postMessage(require('components/cordova/geolocation/getCurrPos'),'*');

            //$('#Lng').val(114.21892734521);
            //$('#Lat').val(29.575429778924);

            $('.btn-register').click(function(){
                var $this = $(this);
                if ($this.hasClass('disable')) {
                    return false;
                }

                var username=$currSection.find('#username').val(),
                    password=$currSection.find('#password').val();

                if(username!=''&&password!=''){
                    if(/^1[0-9]{10}$/.test(username)){
                        $.ajax({
                            url:window.apiHost+'register',
                            type:'post',
                            data: $('#registerForm').serialize(),
                            success:function(data){
                                if(data.status==1){
                                    J.Router.goTo('#userCenter_section');
                                }else{
                                    J.showToast(data.msg,'error');
                                }
                            },
                            beforeSend: function () {
                                $this.addClass('disable').html('注册中...');
                            },
                            complete: function () {
                                $this.removeClass('disable').html('注册');
                            }
                        });
                    }else{
                        J.showToast('请填写正确的手机号！','error');
                    }
                }else{
                    J.showToast('请完善信息！','error');
                }

                return false;
            });
        }
    });
});
