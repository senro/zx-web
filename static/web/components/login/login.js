/**
 * Created with WebStorm.
 * User: qiuyun
 * Date: 15-9-4
 * Time: 下午6:39
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var $=require('jquery');
    var xhr=require('xhr');
    var signals=require('signals');

    //获取定位信息
    signals.getCurrPos.add(function(position){
        $('#Lng').val(position.coords.longitude);
        $('#Lat').val(position.coords.latitude);
    });
    window.parent.postMessage(require('components/cordova/geolocation/getCurrPos'),'*');

    $('.btn-login').click(function(){
        if($('#username').val()!=''&&$('#password').val()!=''){
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
                                    window.location.href=window.baseUrl+'/index.html#/main';
                                }else{
                                    window.location.href=window.baseUrl+'/index.html#/userCenter';
                                }
                            }
                        });

                    }else if(data.status==1001){
                        window.location.href=window.baseUrl+'/index.html#/register';
                    }else{
                        alert(data.msg);
                    }
                }
            });
        }else{
            alert('请完善信息！');
        }

        return false;
    });

});
