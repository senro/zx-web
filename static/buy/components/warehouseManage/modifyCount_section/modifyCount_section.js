/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/warehouseManage/modifyCount_section/modifyCount_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
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

    App.page('modifyCount', function () {
        this.show=function(){
            var $currSection = $('#modifyCount_section');
            var title = getQueryString('title', $currSection.data('query'));
            var repoId=getQueryString('repoId', $currSection.data('query'));
            $currSection.find('.item-detail-tit').html(title);

            //reset
            $currSection.find('.item-detail-form')[0].reset();

            //加载分仓详情
            var item_detail_table_item_tpl="<% var count=0; %>\n<tr>\n    <th>商品名称</th>\n    <th></th>\n    <th class=\"textCenter\">库存剩余</th>\n</tr>\n<% $.each( goodsDetails.content , function(i,item){ %>\n    <tr>\n        <td>\n            <% if(item.status==0){ %>\n            <%= item.goodsName %><br/>\n            <% }else{ %>\n                <span class=\"gray\">\n                    <%= item.goodsName %><br/>【停售】\n                </span>\n            <% } %>\n        </td>\n        <td></td>\n        <td class=\"textCenter\">\n            <input class=\"item-detail-form-input\" data-unit=\"<%= item.unit %>\" data-goodsId=\"<%= item.goodsId %>\" name=\"<%= item.goodsName %>\" data-before=\"<%= item.stock %>\" value=\"<%= item.stock %>\" type=\"text\"/>\n        </td>\n    </tr>\n    <% count+=Number(item.stock) %>\n<% }) %>\n<tr>\n    <td class=\"textRight\">商品合计：</td>\n    <td></td>\n    <td class=\"textCenter total\">\n        <span class=\"num\"><%= sumToday %></span>份\n    </td>\n</tr>\n<tr>\n    <td></td>\n    <td></td>\n    <td class=\"textCenter red\">\n        <% if( sumOutOfStock && sumOutOfStock<0 ){ %>\n            缺 <span class=\"minus\"><%= Math.abs(sumOutOfStock) %></span>份\n        <% } %>\n    </td>\n</tr>";
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
                            utilFunctions.calculateInput($currSection.find('.item-detail-form-input'),$currSection.find('.total .num'),$currSection.find('.minus'));
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
        };
        this.init = function () {
            var $currSection = $('#modifyCount_section');
            //修改库存按钮动作
            $currSection.find('.btn-modify').on('tap',function(){
                var $itemInput=$currSection.find('.item-detail-form-input');
                var $changeReason=$currSection.find('#changeReason');
                var $this = $(this);
                if ($this.hasClass('disable')) {
                    return false;
                }
                if ($changeReason.val()) {
                    $.ajax({
                        url: apiHost + 'areaManagement/updateStock.do',
                        data: {
                            key:window.userObj.account.key,
                            repoId:getQueryString('repoId', $currSection.data('query')),
                            updateJson: JSON.stringify(cellectParamJson($itemInput)),
                            changeReason : $changeReason.val()
                        },
                        dataType: 'json',
                        success: function (data) {
                            //var data=JSON.parse(data);
                            if (data.status == 1) {
                                J.showToast('修改成功！', 'success');
                                $currSection.find('.btn-back').trigger('tap');
                            } else if (data.status == '-99') {
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
                } else {
                    J.showToast('请填写修改库存理由！', 'error');
                }
            });
            function cellectParamJson($inputs){
                var json=[];
                $inputs.each(function(){
                    var obj={};
                    var $this=$(this);
                    obj.goodsId=$this.attr('data-goodsId');
                    obj.goodsName=$this.attr('name');
                    obj.unit=$this.attr('data-unit');
                    obj.before=$this.attr('data-before');
                    obj.after=$this.attr('value');
                    json.push(obj);
                });
                return json;
            }
        }
    });

});