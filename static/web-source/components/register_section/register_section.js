/**
 * Created with WebStorm.
 * User: qiuyun
 * Date: 15-9-4
 * Time: 下午6:39
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var $=require('zepto');
    var J=require('jingle');
    var App=require('App');
    var xhr=require('xhr');

    var signals=require('signals');

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
                                    alert(data.msg);
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
                        alert('请填写正确的手机号！');
                    }
                }else{
                    alert('请完善信息！');
                }

                return false;
            });
        }
    });
});
