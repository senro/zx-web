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

    $('.btn-login').click(function(){
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
        return false;
    });
    $('.btn-getLocation').click(function(){
        signals.getCurrPos.add(function(position){
            alert('你的坐标是：',position.coords.latitude,position.coords.longitude);
        });
        window.parent.postMessage(require('components/cordova/geolocation/getCurrPos'),'*');
        return false;
    });
});
