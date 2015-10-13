/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/12
 * Time: 13:20
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    'use strict';
    window.parent.postMessage("StatusBar.backgroundColorByHexString('#000');",'*');

    $(document).on("pageInit", "#page-login", function(e, id, page) {

    });
    $(document).on("pageInit", "#page-list", function(e, id, page) {

    });
    $(document).on("pageInit", "#page-detail", function(e, id, page) {
        // 加载flag
        var loading = false;
        // 最多可加载的条目
        var maxItems = 100;

        // 每次加载添加多少条目
        var itemsPerLoad = 20;

        function addItems(number, lastIndex) {
            // 生成新条目的HTML
            var html = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                html += ' <li> '+
                '<label class="label-checkbox item-content">'+
                '<div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style="width: 4rem;"></div>'+
                '<div class="item-inner">'+
                '<div class="item-title-row">'+
                '<div class="item-title">xxx商品名称</div>'+
                '</div>'+
                '<div class="item-text">黄小厨-13525255655</div>'+
                '</div>'+

                '<input type="checkbox" name="my-checkbox">'+
                '<div class="item-media"><i class="icon icon-form-checkbox"></i></div>'+
                '</label>'+
                '</li>';
            }
            // 添加新条目
            $('.list-container').append(html);

        }
        //预先加载20条
        addItems(itemsPerLoad, 0);

        $.refreshScroller();
        // 上次加载的序号

        var lastIndex = 20;

        // 注册'infinite'事件处理函数
        $(page).on('infinite', function() {

            // 如果正在加载，则退出
            if (loading) return;

            // 设置flag
            loading = true;

            // 模拟1s的加载过程
            setTimeout(function() {
                // 重置加载flag
                loading = false;

                if (lastIndex >= maxItems) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    $.detachInfiniteScroll($('.infinite-scroll'));
                    // 删除加载提示符
                    $('.infinite-scroll-preloader').remove();
                    return;
                }

                // 添加新条目
                addItems(itemsPerLoad, lastIndex);
                // 更新最后加载的序号
                lastIndex = $('.list-container li').length;
                //容器发生改变,如果是js滚动，需要刷新滚动
                $.refreshScroller();
            }, 1000);
        });

        //确认发货
        $(document).on('click','.sendBtn', function () {
            $.confirm('确认发货?', function () {
                $.alert('ok，已经发货！');
            });
        });

        /*由于sm.js引用了fastClick，里面有针对ios6-7系统检测，所以ios6-7可能需要自己重写在scroll里的checkbox等动作*/
        //sm.js:1050
        // On some iOS devices, the targetElement supplied with the event is invalid if the layer
        // is performing a transition or scroll, and has to be re-detected manually. Note that
        // for this to function correctly, it must be called *after* the event target is checked!
        // See issue #57; also filed as rdar://13048589 .

    });

    $.init();

});
