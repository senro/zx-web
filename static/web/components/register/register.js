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
        //alert('获取地理位置成功：'+position.coords.longitude+','+position.coords.latitude);
        $('#Lng').val(position.coords.longitude);
        $('#Lat').val(position.coords.latitude);
    });
    window.parent.postMessage(require('components/cordova/geolocation/getCurrPos'),'*');

    //$('#Lng').val(114.21892734521);
    //$('#Lat').val(29.575429778924);

    $('.btn-register').click(function(){
        var username=$('#username').val(),
            password=$('#password').val();

        if(username!=''&&password!=''){
            if(/^1[0-9]{10}$/.test(username)){
                $.ajax({
                    url:window.apiHost+'register',
                    type:'post',
                    data: $('#registerForm').serialize(),
                    success:function(data){
                        if(data.status==1){
                            window.location.href=window.baseUrl+'/index.html#/userCenter';
                        }else{
                            alert(data.msg);
                        }
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
});
