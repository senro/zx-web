/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherSearch/searchResult_section/searchResult_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
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

    App.page('searchResult', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#searchResult_section');

            tab({
                btns:$currentSection.find('.header-tabBtns .tabBtn'),
                conts:$currentSection.find('.tabConts-iframe .tabCont'),
                current:'button-link-active-lock',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabConts-iframe .tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabConts-iframe .tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });

            tab({
                btns:$currentSection.find('.searchToolBar .tabBtn'),
                conts:$currentSection.find('.searchToolBar .tabCont'),
                current:'color-blue',
                trigerType:'tap'
            });

            $('.searchToolBar-footer-btn-cancel').on('tap', function () {
                var $this=$(this);
                $this.parents('.searchToolBar').hide();
                return false;
            });

            $('.searchToolIcon').on('tap', function () {
                var $this=$(this);
                $('.searchToolBar').show();
                return false;
            });

            $('.searchKeywordsIcon').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsBar').show();
                return false;
            });

            $('.searchKeywordsBar .searchKeywordsBar-tit-btn-cancel').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsBar').hide();
                return false;
            });

            //搜索详情取消按钮
            $('.searchKeywordsDetail-btn-cancel').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail').hide();
                return false;
            });

            //搜本站按钮
            $('.btn-searchSelfWeb').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-selfWeb').show();
                return false;
            });

            //搜三家按钮
            $('.btn-searchThreeWeb').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-threeWeb').show();
                return false;
            });

            //搜淘宝按钮
            $('.btn-searchTaobao').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-taobao').show();
                return false;
            });

            //搜全网按钮
            $('.btn-searchAllWeb').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-allWeb').show();
                return false;
            });
        }
    });

});