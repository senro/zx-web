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

    $('.btn-register').click(function(){
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
        return false;
    });
});
