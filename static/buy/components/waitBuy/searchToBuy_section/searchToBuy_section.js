/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/waitBuy/searchToBuy_section/searchToBuy_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');

    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('searchToBuy', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#searchToBuy_section');

            $currentSection.find('.goodsList').on('tap','.btn-checkbox',function(){
                var $this=$(this).parents('.goodsBox'),
                    thisTit= $.trim($this.find('.goodsBox-name').html()),
                    $thisCheckBtn=$this.find('.btn-checkbox'),
                    $thisCancelBtn=$this.find('.goodsBox-corner-circle'),
                    canBeCheck=false;

                $currentSection.find('.compareBar2').find('.btn-goods').each(function(){
                    var $thisButton=$(this),
                        thisIndex=$currentSection.find('.compareBar2').find('.btn-goods').index(this);
                    if(!$thisButton.hasClass('active')){
                        switch (thisIndex){
                            case 0:
                                $thisButton.html(thisTit.substr(0, 2)+'...').addClass('bgColor-blue active');
                                $thisCheckBtn.addClass('color-blue active').attr('data-btnId','0');
                                $thisCancelBtn.addClass('bgColor-blue').attr('data-btnId','0');
                                break;
                            case 1:
                                $thisButton.html(thisTit.substr(0, 2)+'...').addClass('bgColor-yellow active');
                                $thisCheckBtn.addClass('color-yellow active').attr('data-btnId','1');
                                $thisCancelBtn.addClass('bgColor-yellow').attr('data-btnId','1');
                                break;
                            case 2:
                                $thisButton.html(thisTit.substr(0, 2)+'...').addClass('bgColor-orange active');
                                $thisCheckBtn.addClass('color-orange active').attr('data-btnId','2');
                                $thisCancelBtn.addClass('bgColor-orange').attr('data-btnId','2');
                                break;
                            case 3:
                                $thisButton.html(thisTit.substr(0, 2)+'...').addClass('bgColor-skyBlue active');
                                $thisCheckBtn.addClass('color-skyBlue active').attr('data-btnId','3');
                                $thisCancelBtn.addClass('bgColor-skyBlue').attr('data-btnId','3');
                                break;
                        }
                        canBeCheck=true;
                        return false;
                    }else{
                        canBeCheck=false;

                    }
                });
                if(!canBeCheck){
                    J.showToast('最多只能选择4个商品！','error');
                }
                return false;
            });

            $currentSection.find('.goodsList').on('tap','.goodsBox-corner-circle',function(){
                var $this=$(this),
                    $thisItem=$this.parents('.goodsBox'),
                    $thisCheckBtn=$thisItem.find('.btn-checkbox'),
                    btnId= Number($.trim($this.attr('data-btnId')));

                if($this.attr('data-btnId')){
                    console.log(btnId);
                    switch (btnId){
                        case 0:
                            $currentSection.find('.compareBar2').find('.button').eq(btnId).removeClass('bgColor-blue active');
                            $this.removeAttr('data-btnId').removeClass('bgColor-blue');
                            $thisCheckBtn.removeClass('color-blue');
                            break;
                        case 1:
                            $currentSection.find('.compareBar2').find('.button').eq(btnId).removeClass('bgColor-yellow active');
                            $this.removeAttr('data-btnId').removeClass('bgColor-yellow');
                            $thisCheckBtn.removeClass('color-yellow');
                            break;
                        case 2:
                            $currentSection.find('.compareBar2').find('.button').eq(btnId).removeClass('bgColor-orange active');
                            $this.removeAttr('data-btnId').removeClass('bgColor-orange');
                            $thisCheckBtn.removeClass('color-orange');
                            break;
                        case 3:
                            $currentSection.find('.compareBar2').find('.button').eq(btnId).removeClass('bgColor-skyBlue active');
                            $this.removeAttr('data-btnId').removeClass('bgColor-skyBlue');
                            $thisCheckBtn.removeClass('color-skyBlue');
                            break;
                    }
                }
                return false;
            });
        }
    });

});