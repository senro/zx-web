define(function (require,exports,module) {
    var $ = require('jquery');
    var parseArgus = require('parseArgus');

    module.exports = function ($_btns, $_conts, str_btn_hover, str_trigerType, str_transType, int_currIndex) {
        /*
         * @位置：  常用组件；
         * @名字：  sliderTab；
         * @翻译：  tab切换（ 所有tab按钮，所有tab内容，按钮current样式，触发类型，切换类型，初始current索引 ）；
         * @参数：  sliderTab( btns, conts, current, trigerType, transType, currIndex )【支持对象传参，以下是属性】
         *         {
         *         btns($)：【必填】jquery选中的所有tab按钮
         *         conts($)：【必填】jquery选中的所有tab内容框
         *         current（字符串）：【必填】current类名
         *         trigerType（字符串）：【可选】触发类型包括jquery的事件类型，如‘click’，‘mouseover’，默认mouseover
         *         transType（字符串）：【可选】切换类型有，‘normal’，‘fade’，默认normal
         *         currIndex（数字）：【可选】初始current的索引值，以0开始，默认0
         *         }；
         * @功能：  tab切换，根据传参，初始化tab组件；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/sliderTab.html；
         * @需要：  parseArgus；
         * @备注：  可以使用< !--senroLabel.sliderTab[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class；
         */
        var attr = {
            btns: $,
            conts: $,
            current: '',
            trigerType: 'mouseover',
            transType: 'normal',
            currIndex: 0
        };

        parseArgus(arguments, attr);

        var $_btns = attr['btns'],
            $_conts = attr['conts'],
            str_btn_hover = attr['current'],
            str_trigerType = attr['trigerType'],
            str_transType = attr['transType'],
            int_currIndex = attr['currIndex'];

        var $btns = $_btns,
            $conts = $_conts,
            trigerType = str_trigerType || 'mouseover',
            transType = str_transType || 'normal',
            currIndex = int_currIndex || 0,
            lastOne = int_currIndex || 0;
        //默认给第一个按钮加上hover,隐藏其他内容
        $btns.eq(currIndex).addClass(str_btn_hover);
        for (var i = 0; i < $conts.length; i++) {
            if (i != currIndex) {
                $conts.eq(i).hide();
            } else {
                $conts.eq(i).show();
            }
        }
        $btns.bind(trigerType, function () {
            var index = $btns.index(this);
            if (index == lastOne || $conts.is(':animated')) {
                return false;
            }
            switch (transType) {
                case 'normal':
                    transNormal(index);
                    break;
                case 'fade':
                    transFade(index);
                    break;
            }

            lastOne = index;

            return false;
        });
        function transNormal(index) {
            $conts.eq(lastOne).hide();
            $btns.eq(lastOne).removeClass(str_btn_hover);

            $conts.eq(index).show();
            $btns.eq(index).addClass(str_btn_hover);

            return false;
        }

        function transFade(index) {
            $conts.eq(lastOne).fadeOut(200);
            $btns.eq(lastOne).removeClass(str_btn_hover);

            $conts.eq(index).fadeIn(200);
            $btns.eq(index).addClass(str_btn_hover);

            return false;
        }

        return false;
    };
});