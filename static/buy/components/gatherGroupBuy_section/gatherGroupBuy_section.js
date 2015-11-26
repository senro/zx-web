/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherGroupBuy_section/gatherGroupBuy_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
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

    App.page('gatherGroupBuy', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherGroupBuy_section');
            var $tabBtns=$currentSection.find('.header-secondary');
            var $activeArticle=$currentSection.find('article.active');
            $currentSection.find('.button-links .btn-more').on('tap',function(){
                if($tabBtns.height()==0){
                    $tabBtns.animate({height:30},100);
                    $activeArticle.animate({top:74},100);
                }else{
                    $tabBtns.animate({height:0},100);
                    $activeArticle.animate({top:44},100);
                }
            });

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'active',
                trigerType:'tap'
            });
        }
    });

});