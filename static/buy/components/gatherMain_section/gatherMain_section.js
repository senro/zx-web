/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherMain_section/gatherMain_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template', 'spm_modules/cssTriangle/0.0.1/cssTriangle'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    var cssTriangle=require('spm_modules/cssTriangle/0.0.1/cssTriangle');

    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherMain', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherMain_section');
            var $websiteCats=$currentSection.find('.websiteCats');
            $currentSection.find('.button-links .btn-more').on('tap',function(){
                if($websiteCats.height()==0){
                    $websiteCats.animate({height:110,borderWidth:1},100);
                }else{
                    $websiteCats.animate({height:0,borderWidth:0},100);
                }
            });
            J.Scroll('#gatherMain-websiteCats-box-cats',{hScroll:true,hScrollbar : false});
            J.Scroll('#gatherMain-websiteCats-box-catsCont',{hScroll:true,hScrollbar : false});

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'button-link-active-lock',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });

            //初始化更多按钮的三角
            cssTriangle($('.triangle-down'),'down','5px','#3498DB');
        }
    });

});