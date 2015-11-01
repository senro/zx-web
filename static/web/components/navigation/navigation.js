define('components/navigation/navigation', ['spm_modules/zepto/zepto', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {

    var $ = require('spm_modules/zepto/zepto');
    var currPage=delUrlQuery(location.href.split('#')[1]);
    var template=require('spm_modules/template/3.0.0/template');

    function domReady() {
        var $navigate = $('#aside_container');
        $navigate.load(window.baseUrl+'/components/navigation/navigation.html',function(html){

            // 退出
            $('body').on('click', '#logout', function (event) {
                var $this = $(this);
                if ($this.hasClass('disable')) {
                    return false;
                }
                if (event) {
                    event.preventDefault();
                }
                $.ajax({
                    url: apiHost + 'login/logout.do',
                    dataType: 'json',
                    success: function (data) {
                        if (data.status == 1) {
                            J.Router.goTo('#login_section');
                        } else {
                            J.showToast(data.detail, 'error');
                        }
                    },
                    beforeSend: function () {
                        $this.addClass('disable');
                    },
                    complete: function () {
                        $this.removeClass('disable');
                    }
                });

            });
        });

    }
    function delUrlQuery(url){
        var str;
        if(/\?/.test(url)){
            str=url.split('?')[0];
        }else{
            str=url;
        }
        return str;
    }

    $(document).ready(domReady);

});