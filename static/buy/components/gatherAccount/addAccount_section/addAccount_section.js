/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherAccount/addAccount_section/addAccount_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/radio/0.0.1/radio', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var radio=require('spm_modules/radio/0.0.1/radio');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('addAccount', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#addAccount_section');
            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'dark-orange',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currentSection.find('.tabCont').removeClass('active');
                    $currTabCont.addClass('active');
                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currentSection.find('.tabCont').removeClass('active');
                    $currTabCont.addClass('active');
                }
            });
            $currentSection.find('.search-result').on('tap','.search-result-word',function(){
                var $this=$(this),
                    value= $.trim($this.html());
                $currentSection.find('.tabCont.active').find('.btn-replace').attr('data-value',value).css('display','block !important');
                return false;
            });
            $currentSection.find('.tabCont.active').find('.btn-replace').on('tap',function(){
                var $this=$(this),
                    value=$this.attr('data-value'),canSubmit=true;
                //替换按钮，应该会调接口
                $currentSection.find('.tabCont.active').find('.btn-selected').each(function(){
                    var $thisBtn=$(this);

                    if($.trim($thisBtn.html())==value){
                        canSubmit=false;
                        return false;
                    }
                });
                if(canSubmit){
                    $this.siblings('.btn-selected').html(value);
                    $currentSection.find('.tabCont.active').find('.btn-replace').css('display','none !important');
                    $currentSection.find('.search-result').find('.search-result-word').removeClass('color-orange');
                }else{
                    J.showToast('已经有该网站，请选择其他网站替换！','error');
                }

                return false;
            });
            //点击body取消替换状态
            $currentSection.on('tap',function(){
                $currentSection.find('.tabCont.active').find('.btn-replace').css('display','none !important');
                $currentSection.find('.search-result').find('.search-result-word').removeClass('color-orange');
                return false;
            });
            radio($currentSection.find('.search-result').find('.search-result-word'),'color-orange');
        }
    });

});