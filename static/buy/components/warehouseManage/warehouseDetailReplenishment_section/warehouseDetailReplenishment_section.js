/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/warehouseManage/warehouseDetailReplenishment_section/warehouseDetailReplenishment_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');

    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('Number',Number);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('warehouseDetailReplenishment', function () {
        this.show=function() {
            var $currSection = $('#warehouseDetailReplenishment_section');
            var title = getQueryString('title', $currSection.data('query'));
            $currSection.find('.title').html(title);

            //加载补货列表
            var item_detail_table_item_tpl="\n<% $.each( supplementDetails , function(i,item){ %>\n    <li data-selected=\"selected\" class=\"warehouseDetailReplenishment-list-item\">\n        <div class=\"tag\">\n            <% if(item.status==0){ %>\n            已完成\n            <% }else{ %>\n            进行中\n            <% } %>\n        </div>\n        <strong>\n\n            <% if(item.isEmergency==1){ %>\n                <span class=\"yellow\">补货中-加急</span>\n            <% }else{ %>\n                补货中\n            <% } %>\n        </strong>\n        <div class=\"item-detail\">\n            <table class=\"item-detail-table\">\n                <% $.each( item.detailsList , function(i,detailsListItem){ %>\n                <tr>\n                    <td>\n                        <% if(detailsListItem.goodsStatus==0){ %>\n                            <%= detailsListItem.goodsName %> &nbsp;&nbsp;&nbsp;&nbsp;<%= detailsListItem.unit %>\n                        <% }else{ %>\n                            <span class=\"gray\">\n                                <%= detailsListItem.goodsName %> &nbsp;&nbsp;&nbsp;&nbsp;<%= detailsListItem.unit %>\n                                 <br/>【停售】\n                            </span>\n\n                        <% } %>\n                    </td>\n                    <td></td>\n                    <td class=\"textRight\"><%= detailsListItem.supplement %> 份</td>\n                </tr>\n                <% }) %>\n                <tr>\n                    <td class=\"textRight\">商品合计：</td>\n                    <td></td>\n                    <td class=\"textRight\"><%= item.sumSupplement %> 份</td>\n                </tr>\n            </table>\n            <div class=\"textRight\">\n                <a class=\"button btn-confirm\" data-id=\"<%= item.supplyRecordId %>\" href=\"#\">\n                    确认\n                </a>\n            </div>\n\n        </div>\n        <i class=\"icon next\"></i>\n    </li>\n<% }) %>\n";
            $.ajax({
                url: apiHost + 'areaManagement/queryReplenishmentList.do',
                dataType: 'json',
                data:{
                    key:window.userObj.account.key,
                    repoId:getQueryString('repoId', $currSection.data('query')),
                    page:0,
                    size:100
                },
                success: function (data) {
                    if (data.status == 1) {
                        if(data.data){
                            var render=template.compile(item_detail_table_item_tpl);
                            $currSection.find('.warehouseDetailReplenishment-list').html(render(data.data));
                        }
                    } else if (data.status == '-99') {
                        J.Router.goTo('#login_section');
                        //根据缓存自动填写手机号
                        if (userObj.account && userObj.account.mobile) {
                            $('.input-cellphone').val(userObj.account.mobile);
                        }
                    } else {
                        J.showToast(data.detail, 'error');
                    }

                },
                beforeSend: function () {

                },
                complete: function () {

                }
            });
        };
        this.init = function () {
            var $currSection = $('#warehouseDetailReplenishment_section');
            var title = getQueryString('title', $currSection.data('query'));

            //补货列表下拉
            $currSection.on('tap','.warehouseDetailReplenishment-list-item',function(){
                var $this=$(this),
                    id=$this.data('id');
                $this.siblings().find('.item-detail').hide();
                $this.siblings().find('.icon').removeClass('arrow-down').addClass('next');
                if ( $this.find('.icon').hasClass('next') && id != '') {
                    $this.find('.item-detail').show();
                    $this.find('.icon').removeClass('next').addClass('arrow-down');
                }else {
                    $this.find('.item-detail').hide();
                    $this.find('.icon').removeClass('arrow-down').addClass('next');
                }
                return false;
            });
            //确认按钮动作
            $currSection.on('tap','.btn-confirm',function(){
                var $this=$(this),
                    id=$this.data('id');
                if ( id != '') {
                    J.confirm(
                        '',
                        '确认 '+title+' 已经收到货物?',
                        function(){
                            $.ajax({
                                url: apiHost + 'areaManagement/replenishmentConfirmation.do',
                                dataType: 'json',
                                data: {
                                    key: window.userObj.account.key,
                                    repoId: getQueryString('repoId', $currSection.data('query')),
                                    supplyRecordId:id
                                },
                                success: function (data) {
                                    if (data.status == 1) {
                                        J.showToast('确认成功！', 'success');
                                        $this.parents('.warehouseDetailReplenishment-list-item').remove();
                                    } else if (data.status == '-99') {
                                        J.Router.goTo('#login_section');
                                        //根据缓存自动填写手机号
                                        if (userObj.account && userObj.account.mobile) {
                                            $('.input-cellphone').val(userObj.account.mobile);
                                        }
                                    } else {
                                        J.showToast(data.detail, 'error');
                                    }

                                },
                                beforeSend: function () {

                                },
                                complete: function () {

                                }
                            });
                        },function(){

                        }
                    );

                } else {
                    J.showToast('补货id不能为空！', 'error', 0);
                }
                return false;
            });
        }
    });

});