/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/warehouseManage/warehouseDetail_section/warehouseDetail_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
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

    App.page('warehouseDetail', function () {
        this.show=function() {
            var $currSection = $('#warehouseDetail_section');
            var title = getQueryString('title', $currSection.data('query'));
            var repoId=getQueryString('repoId', $currSection.data('query'));
            $currSection.find('.title').html(title);

            //加载分仓详情
            var item_detail_table_item_tpl="<% var count=0; %>\n<tr>\n    <th>商品名称</th>\n    <th>今日已售</th>\n    <th class=\"textRight\">库存剩余</th>\n</tr>\n<% $.each( goodsDetails.content , function(i,item){ %>\n    <tr>\n        <td>\n            <% if(item.status==0){ %>\n                <%= item.goodsName %>【<%= item.unit %>】<br/>\n            <% }else{ %>\n                <span class=\"gray\">\n                    <%= item.goodsName %>【<%= item.unit %>】<br/>\n                    【停售】\n                </span>\n\n            <% } %>\n\n        </td>\n        <td class=\"textCenter\"><%= item.todayCount %></td>\n        <td class=\"textRight\">\n            <% if( Number(item.stock) < 0){ %>\n                <span class=\"red\"><%= item.stock %></span>份\n            <% }else{ %>\n                <%= item.stock %>份\n            <% } %>\n        </td>\n    </tr>\n    <% count+=Number(item.stock) %>\n<% }) %>\n<tr>\n    <td class=\"textRight\">商品合计：</td>\n    <td class=\"textCenter\"><%= sumToday %>份</td>\n    <td class=\"textRight\">\n        <%= sumStock %>份\n    </td>\n</tr>\n<tr>\n    <td></td>\n    <td></td>\n    <td class=\"textCenter red\">\n        <% if(sumOutOfStock && sumOutOfStock<0){ %>\n            缺 <span class=\"minus\"><%= Math.abs(sumOutOfStock) %></span>份\n        <% } %>\n\n    </td>\n</tr>";
            $.ajax({
                url: apiHost + 'areaManagement/queryBranchWarehouseDetails.do',
                dataType: 'json',
                data:{
                    key:window.userObj.account.key,
                    repoId:repoId,
                    page:0,
                    size:100
                },
                success: function (data) {
                    if (data.status == 1) {
                        if(data.data){
                            var render=template.compile(item_detail_table_item_tpl);
                            $currSection.find('.item-detail-table').html(render(data.data));
                            if(data.data.supplyCount>0){
                                $currSection.find('.right').show();
                                $currSection.find('.right').find('a').attr('href','#warehouseDetailReplenishment_section?repoId='+getQueryString('repoId', $currSection.data('query'))+'&title='+title);
                                $currSection.find('.right').find('a span').html(data.data.supplyCount);
                            }
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

                }
            });
            //加载分仓接头人信息
            var areaInfo_table_tpl="<tr>\n    <td>仓库收货人</td>\n    <td class=\"textRight\">\n        <% $.each( consigneeList , function(i,item){ %>\n            <% if(i!=consigneeList.length-1){ %>\n                <%= decodeURIComponent(item.staffName) %>(<%= item.staffMobile %>)<br/>\n            <% }else{ %>\n                <%= decodeURIComponent(item.staffName) %>(<%= item.staffMobile %>)\n            <% } %>\n        <% }) %>\n    </td>\n</tr>\n\n<tr>\n    <td>负责小区：</td>\n    <td class=\"textRight\">\n        <% $.each( villageList , function(i,item){ %>\n            <% if(i!=villageList.length-1){ %>\n                    <%= item.villageName %><br/>\n            <% }else{ %>\n                    <%= item.villageName %>\n            <% } %>\n        <% }) %>\n\n    </td>\n</tr>\n\n";
            $.ajax({
                url: apiHost + 'areaManagement/queryConsignee.do',
                dataType: 'json',
                data:{
                    key:window.userObj.account.key,
                    repoId:repoId
                },
                success: function (data) {
                    if (data.status == 1) {
                        if(data.data){
                            var render=template.compile(areaInfo_table_tpl);
                            $currSection.find('.areaInfo-table').html(render(data.data));
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

                }
            });
            //初始化下面按钮链接
            $('.warehouseDetail-footer-btn.btn-modify').attr('href','#modifyCount_section?repoId='+repoId+'&title='+title);
            $('.warehouseDetail-footer-btn.btn-apply').attr('href','#applyReplenishment_section?repoId='+repoId+'&title='+title);
        };
        this.init = function () {


        }
    });

});