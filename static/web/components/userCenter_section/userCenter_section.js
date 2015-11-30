/**
 * Created with WebStorm.
 * User: qiuyun
 * Date: 15-9-4
 * Time: 下午5:55
 * To change this template use File | Settings | File Templates.
 */
define('components/userCenter_section/userCenter_section', ['spm_modules/zepto/zepto', 'spm_modules/jingle/Jingle.debug.qymodify', 'spm_modules/cookie/cookie', 'components/util/App', 'spm_modules/xhr/xhr', 'components/signals/signals', 'components/cordova/camera/getPicture'], function(require, exports, module){
    var $=require('spm_modules/zepto/zepto');
    var J=require('spm_modules/jingle/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/cookie');
    var App=require('components/util/App');
    var xhr=require('spm_modules/xhr/xhr');
    var signals=require('components/signals/signals');

    App.page('userCenter', function () {
        this.init = function () {
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
                        J.showToast($currInput.data('vd-msg'),'error');
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
                                J.Router.goTo('#main_section');
                            }else if(data.status==-99){
                                J.Router.goTo('#login_section');
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
        }
    });

});