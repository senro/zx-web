/**
 * Created with WebStorm.
 * User: qiuyun
 * Date: 15-9-4
 * Time: 下午5:55
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var $=require('jquery');
    var xhr=require('xhr');
    var signals=require('signals');

    //获取用户信息
    $.ajax({
        url:window.apiHost+'getUserInfo',
        type:'get',
        success:function(data){
            if(data.status==1){
                $('#name').val(data.data.name);
                $('#email').val(data.data.email);
                $('#description').val(data.data.description);
                $('#sex').find('option[value='+data.data.sex+']').attr('selected','selected');
                $('#identity').find('option[value='+data.data.identity+']').attr('selected','selected');
            }
        }
    });

    $('.btn-save').click(function(){
        var canSubmit=true;
        $('#userInfoForm').find('input[required=required],textarea[required=required]').each(function(index){
            var $currInput=$(this);
            if($currInput.val()==''){
                canSubmit=false;
                alert($currInput.data('vd-msg'));
                return false;
            }
        });
        if(canSubmit){
            $.ajax({
                url:window.apiHost+'saveUserInfo',
                type:'post',
                data: $('#userInfoForm').serialize(),
                success:function(data){
                    if(data.status==1){
                        window.location.href=window.baseUrl+'/index.html#/main';
                    }else if(data.status==-99){
                        window.location.href=window.baseUrl+'/index.html#/login';
                    }
                }
            });
        }

        return false;
    });
    $('.userPic').click(function(){
        //获取图片
        signals.getPicture.add(function(imgSrc){
            $('.userPic').attr('src',imgSrc);
        });
        window.parent.postMessage(require('components/cordova/camera/getPicture'),'*');
        return false;
    });


});