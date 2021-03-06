define('static/js/index', ['components/util/deviceSetting', 'spm_modules/zepto/0.0.1/zepto', 'spm_modules/cookie/0.0.1/cookie', 'components/navigation/navigation', 'components/util/App', 'components/login_section/login_section', 'components/gatherMain_section/gatherMain_section', 'components/gatherCheapBuy_section/gatherCheapBuy_section', 'components/gatherGroupBuy_section/gatherGroupBuy_section', 'components/gatherSeaBuy_section/gatherSeaBuy_section', 'components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section', 'components/gatherActs/gatherActsList_section/gatherActsList_section', 'components/gatherSearch/search_section/search_section', 'components/gatherSearch/searchResult_section/searchResult_section', 'components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section', 'components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section', 'components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section', 'components/waitBuy/searchToBuy_section/searchToBuy_section', 'components/gatherSearch/change_section/change_section', 'components/gatherAccount/addAccount_section/addAccount_section', 'components/navigation/navigation', 'components/user_section/user_section', 'components/modifyPassword_section/modifyPassword_section', 'components/main_section/main_section'], function (require, exports, module) {

    //初始化app的native设置
    require('components/util/deviceSetting');
    //require('components/util/utilRouter');

    var $ = require('spm_modules/zepto/0.0.1/zepto');
    var cookie = require('spm_modules/cookie/0.0.1/cookie');
    var navigation = require('components/navigation/navigation');
    var App=require('components/util/App');

    if(cookie('get', 'userObj')){
        window.userObj = JSON.parse(cookie('get', 'userObj'));     // 全局登录信息
    }

    //模拟接口数据
    //require('components/util/mockInterface');
    require('components/login_section/login_section');
    require('components/gatherMain_section/gatherMain_section');
    require('components/gatherCheapBuy_section/gatherCheapBuy_section');
    require('components/gatherGroupBuy_section/gatherGroupBuy_section');
    require('components/gatherSeaBuy_section/gatherSeaBuy_section');
    require('components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section');
    require('components/gatherActs/gatherActsList_section/gatherActsList_section');
    require('components/gatherSearch/search_section/search_section');
    require('components/gatherSearch/searchResult_section/searchResult_section');
    require('components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section');
    require('components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section');
    require('components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section');
    require('components/waitBuy/searchToBuy_section/searchToBuy_section');
    require('components/gatherSearch/change_section/change_section');
    require('components/gatherAccount/addAccount_section/addAccount_section');

    require('components/navigation/navigation');
    require('components/user_section/user_section');
    require('components/modifyPassword_section/modifyPassword_section');

    require('components/main_section/main_section');



    var $aside = $('#section_container');
    $aside.load(window.baseUrl+'/components/login_section/login_section.html',function(html){
        App.run();
    });

});