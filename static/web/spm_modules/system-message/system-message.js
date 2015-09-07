define(function (require, exports, module) {
    /**
     * 提示信息，用于代替系统的 alert
     */
    var $ = require('jquery');

    var $body = $(document.body),
        $element = $('#systemMessage'),
        timer = null,
        messageType = {
            'error': '错误！',
            'alert': '警告！',
            'info': '信息！',
            'done': '完成！'
        },
        DEFAULTS = {
            autoHide: true,
            wait: 2000,
            type: 'alert',
            title: '警告！',
            detail: ''
        };

    if (!$element.length) {
        $element = $('<div id="systemMessage" class="system-message fade yahei"></div>');
        $body.append($element);
    } else {
        $element.html('');
    }

    var $close = $('<button class="close" type="button"><span>&times;</span><span class="sr-only">Close</span></button>');
    $element.append($close);

    var $title = $('<h4></h4>');
    $element.append($title);

    var $detail = $('<p></p>');
    $element.append($detail);

    $close.on('click', function (e) {
        $element.fadeOut();
    });

    function systemMessage(options) {
        var opt = {};

        if ($.type(options) === 'string') {
            options = {detail: options};
        }

        opt = $.extend({}, DEFAULTS, options);

        clear();

        $title.html(opt.title);
        $detail.html(opt.detail);
        $element.addClass('in system-message-' + opt.type).show();

        $element.css({
            marginLeft: -($element.width() / 2),
            marginTop: -($element.height() / 2)
        });

        if (opt.autoHide) {
            autoHide(opt.wait);
        }

    }

    function autoHide(wait) {
        autoHide.wait = wait;

        timer = setTimeout(function () {
            $element.fadeOut();
        }, wait);

        $element.on('mouseenter', function () {
            clearTimeout(timer);
        }).on('mouseleave', function () {
            autoHide(autoHide.wait);
        });
    }

    function clear() {
        clearTimeout(timer);

        $.each(messageType, function (name, valeu) {
            $element.removeClass('system-message-' + name);
        });

        $element.off().hide();
        $title.html('');
        $detail.html('');
    }

    /**
     * 警告
     * @param message
     */
    function error(message) {
        systemMessage({
            type: 'error',
            title: '错误：',
            detail: message || '操作发生错误！'
        });
    }

    /**
     * 信息提示
     * @param message
     */
    function info(message) {
        systemMessage({
            type: 'info',
            title: '信息：',
            detail: message || '操作信息提示！'
        });
    }

    /**
     * 警告提示
     * @param message
     */
    function alert(message) {
        systemMessage({
            type: 'alert',
            title: '警告：',
            detail: message || '操作警告提示！'
        });
    }

    /**
     * 成功提示
     * @param message
     */
    function done(message) {
        systemMessage({
            type: 'done',
            title: '完成：',
            detail: message || '操作完成！'
        });
    }

    return {
        systemMessage: systemMessage,
        info: info,
        alert: alert,
        error: error,
        done: done
    };
});