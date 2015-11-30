/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/26
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */
define('components/util/App', ['spm_modules/jingle/0.0.1/Jingle.debug.qymodify'], function (require, exports, module) {
    var J=Jingle=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var App;
    var pages = {};
    var run = function () {
        $.each(pages, function (k, v) {
            var sectionId = '#' + k + '_section';
            $('body').delegate(sectionId, 'pageinit', function () {
                v.init && v.init.call(v);
            });
            $('body').delegate(sectionId, 'pageshow', function (e, isBack) {
                //页面加载的时候都会执行
                v.show && v.show.call(v);
                //后退时不执行
                if (!isBack && v.load) {
                    v.load.call(v);
                }
            });
        });

        J.Transition.add('flip', 'slideLeftOut', 'flipOut', 'slideRightOut', 'flipIn');


        Jingle.launch({
            showWelcome: false,
            welcomeSlideChange: function (i) {},
            showPageLoading: true,
            remotePage: {
                '#modifyPassword_section': 'components/modifyPassword_section/modifyPassword_section.html',
                '#user_section': 'components/user_section/user_section.html',
                '#login_section': 'components/login_section/login_section.html',

                //首页列表
                '#main_section': 'components/main_section/main_section.html',
                '#search_section': 'components/gatherSearch/search_section/search_section.html',
                '#searchResult_section': 'components/gatherSearch/searchResult_section/searchResult_section.html',
                '#searchResultAllWebDetail_section': 'components/gatherSearch/searchResultAllWebDetail_section/searchResultAllWebDetail_section.html',
                '#change_section': 'components/gatherSearch/change_section/change_section.html',
                '#searchToBuy_section': 'components/waitBuy/searchToBuy_section/searchToBuy_section.html',
                '#searchToBuyDetail_section': 'components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section.html',
                '#gatherMain_section': 'components/gatherMain_section/gatherMain_section.html',
                '#gatherCheapBuy_section': 'components/gatherCheapBuy_section/gatherCheapBuy_section.html',
                '#gatherHeadlineList_section': 'components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section.html',
                '#gatherHeadlineListDetail_section': 'components/gatherHeadline/gatherHeadlineListDetail_section/gatherHeadlineListDetail_section.html',
                '#gatherActsList_section': 'components/gatherActs/gatherActsList_section/gatherActsList_section.html',
                '#gatherActsListDetail_section': 'components/gatherActs/gatherActsListDetail_section/gatherActsListDetail_section.html',
                '#gatherGroupBuy_section': 'components/gatherGroupBuy_section/gatherGroupBuy_section.html',
                '#gatherSeaBuy_section': 'components/gatherSeaBuy_section/gatherSeaBuy_section.html',
                '#addAccount_section': 'components/gatherAccount/addAccount_section/addAccount_section.html',
                '#accountDetail_section': 'components/gatherAccount/accountDetail_section/accountDetail_section.html',
                '#accountManage_section': 'components/gatherAccount/accountManage_section/accountManage_section.html',
                '#gatherIntelligentSearch_section': 'components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section.html',
                '#gatherIntelligentSearchAll_section': 'components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section.html',

            }
        });



    };
    var page = function (id, factory) {
        return ((id && factory) ? _addPage : _getPage).call(this, id, factory);
    };
    var _addPage = function (id, factory) {
        pages[id] = new factory();
    };
    var _getPage = function (id) {
        return pages[id];
    };
    //动态计算chart canvas的高度，宽度，以适配终端界面
    var calcChartOffset = function () {
        return {
            height: $(document).height() - 44 - 30 - 60,
            width: $(document).width()
        }

    };
    App= {
        run: run,
        page: page,
        calcChartOffset: calcChartOffset
    };

    module.exports=App;
});