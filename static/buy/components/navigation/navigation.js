define('components/navigation/navigation', ['spm_modules/zepto/0.0.1/zepto'], function (require, exports, module) {

    var $ = require('spm_modules/zepto/0.0.1/zepto');

    function domReady() {
       $('body').on('tap','.btn-refresh',function(){
           window.location.reload();
           return false;
       });
    }
    $(document).ready(domReady);

});