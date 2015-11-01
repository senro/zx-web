/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/26
 * Time: 13:44
 * To change this template use File | Settings | File Templates.
 */
define(function (require, exports, module) {
    function validateGoodsId(goodsId) {
        var result = true;
        $.each(userObj.goodsIds, function (i, item) {
            if (item.goodsId == goodsId) {
                result = false;
                return false;
            }
        });
        return result;
    }

    function collectParams($items) {
        var params = [];
        $items.each(function (index) {
            var $thisItem = $(this);
            var id = $thisItem.attr('data-id');
            params.push(id);
        });
        return params.join(',');
    }

    function getOrderList(params, beforeCallback, completeCallback, usefullCallback, uselessCallback) {
        $.ajax({
            url: apiHost + 'groupPurchase/queryProductOrderByIds.do',
            data: params,
            dataType: 'json',
            success: function (data) {
                //var data=JSON.parse(data);
                if (data.status == 1) {
                    if (data.data.content && data.data.content.length > 0) {
                        usefullCallback && usefullCallback(data);
                        for (var i = 0; i < data.data.content.length; i++) {
                            var item = data.data.content[i];
                            var name = item.name;
                            var goodsName = item.goodsName;
                            var goodsId = item.goodsId;
                            var orderId = item.orderId;
                            var mobile = item.mobile;
                            var imgKey = item.orderImg;
                            $('.orderListItems').append(
                                '<li class="orderListItem clearfix" data-selected="selected" data-id="' + orderId + '">' +
                                '<div class="item-media"><img src="/hw-sq-run-web/banner/getBannerPicture.do?pictureId=' + imgKey + '" style="width: 4rem;"></div>' +
                                '<div class="item-inner">' +
                                '<div class="item-title-row">' +
                                '<div class="item-title">' + goodsName + '</div>' +
                                '</div>' +
                                '<div class="item-text">' + name + '<br/>' + mobile + '</div>' +
                                '</div>' +
                                '<div class="item-after btn-checkBtn">' +
                                '<i class="icon checkbox-unchecked"></i>' +
                                '</div>' +
                                '</li>'
                            );
                        }
                        totalPage = data.data.totalPages;
                        startPage = data.data.number;

                    } else {
                        uselessCallback && uselessCallback();
                        $('.orderListItems').html('');
                        $('.orderListItems').append(
                            '<li class="orderListItem clearfix" data-selected="selected"><p class="textCenter">没有相关订单</p></li>'
                        );
                    }

                } else if (data.status == '-99') {
                    J.Router.goTo('#login_section');
                } else {
                    J.showToast(data.detail, 'error');
                }

            },
            beforeSend: function () {
                beforeCallback && beforeCallback();
            },
            complete: function () {
                completeCallback && completeCallback();
            }
        });
    }
    module.exports={
        validateGoodsId:validateGoodsId,
        collectParams:collectParams,
        getOrderList:getOrderList
    }
});