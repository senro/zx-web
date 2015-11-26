/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
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

    App.page('gatherIntelligentSearch', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currSection=$('#gatherIntelligentSearch_section');
            $currSection.find('.input-keywords').blur(function(){
                var $this=$(this);
                if($this.val()){
                    $currSection.find('.blankState').hide();
                    $currSection.find('.enterKeywordsStats').show();
                }
            });
            tab({
                btns:$currSection.find('.enterKeywordsStats .tabBtn'),
                conts:$currSection.find('.enterKeywordsStats .tabCont'),
                current:'active',
                trigerType:'tap'
            });
            $currSection.find('.history-words .btn-delAll').on('tap',function(){
                $currSection.find('.history-words .history-words-list').html('');
            });
            $currSection.find('.history-words').on('tap','.btn-del',function(){
                var $currItem=$(this).parents('.history-words-list-item');
                $currItem.remove();
            });
            //$currSection.find('.btn-cats').on('tap',function(){
            //    var $this=$(this);
            //    if($this.hasClass('list')){
            //        $this.removeClass('list').addClass('pencil');
            //        $currSection.find('.hot-words,.history-words').hide();
            //        $currSection.find('.category-viewport').show();
            //    }else{
            //        $this.removeClass('pencil').addClass('list');
            //        $currSection.find('.hot-words,.history-words').show();
            //        $currSection.find('.category-viewport').hide();
            //    }
            //});
        }
    });

});