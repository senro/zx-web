/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('searchToBuyDetail', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#searchToBuyDetail_section');

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'peter-river',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabBtn=$currentSection.find('.tabBtn').eq(currIndex);
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currTabBtn.removeClass('asbestos');
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    var $currTabBtn=$currentSection.find('.tabBtn').eq(currIndex);
                    var $lastTabBtn=$currentSection.find('.tabBtn').eq(lastOneIndex);
                    $lastTabBtn.addClass('asbestos');
                    $currTabBtn.removeClass('asbestos');
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });
        }
    });

});