define('components/navigation/navigation', ['spm_modules/zepto/0.0.1/zepto'], function (require, exports, module) {

    var $ = require('spm_modules/zepto/0.0.1/zepto');

    function domReady() {
       $('body').on('tap','.btn-refresh',function(){
           window.location.reload();
           return false;
       });
    }
    $(document).ready(domReady);

    var mainNavHtml="<a href=\"#layout_book_article\">\r\n    <i class=\"icon icon-person-buy\"></i>\r\n    集人购\r\n</a>\r\n<a href=\"#main_section\" data-target=\"section\">\r\n    <i class=\"icon icon-search-goods\"></i>\r\n    搜物\r\n</a>\r\n<a href=\"#searchToBuy_section\" data-target=\"section\">\r\n    <i class=\"icon icon-before-buy\"></i>\r\n    待购\r\n</a>\r\n<a href=\"#layout_book_article\">\r\n    <i class=\"icon icon-user-center\"></i>\r\n    个人中心\r\n</a>";
    var detailNavHtml="<a class=\"footer-btn-searchGoods\" href=\"#layout_book_article\">\r\n    <i class=\"icon icon-search-goods\"></i>\r\n    搜物\r\n</a>\r\n<a href=\"#\" data-target=\"back\">\r\n    <i class=\"icon icon-noText icon-leftArrow\"></i>\r\n</a>\r\n<a href=\"#layout_book_article\">\r\n    <i class=\"icon icon-noText icon-rightArrow\"></i>\r\n</a>\r\n<a href=\"#main_section\" data-target=\"section\">\r\n    <i class=\"icon icon-noText icon-home\"></i>\r\n</a>\r\n<a href=\"#\" class=\"btn-refresh\">\r\n    <i class=\"icon icon-noText icon-refresh\"></i>\r\n</a>";

    module.exports={
        mainNavHtml:mainNavHtml,
        detailNavHtml:detailNavHtml
    };

});