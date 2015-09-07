define(function (require,exports,module) {
    var $ = require('jquery');

    module.exports = function (str_className, str_selectedClassName) {
        /*
         * @位置：  常用界面交互方法；
         * @名字：  radio；
         * @翻译：  单选框（ 需要加的按钮，current类名 ）；
         * @参数：  radio( className,selectedClassName )
         *         className（字符串）：【必填】要模拟checkbox选项的类名
         *         selectedClassName（字符串）：【必填】已选后的类名；
         * @功能：  模拟radio的行为，选项里可以有input；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/questionnaire.html；
         * @需要：  无；
         * @备注：  结构比如<a class="single" href="javascript:;">15岁以下</a>；
         */
        var $radio = $('.' + str_className);
        $radio.click(function () {
            var $this = $(this),
                $otherAnswers = $this.siblings();
            $otherAnswers.removeClass(str_selectedClassName);

            if (!$this.hasClass(str_selectedClassName)) {

                $this.addClass(str_selectedClassName);
                $this.attr('data-selected', 'selected');

            }
            return false;
        });
        if ($radio.find('input').length > 0) {
            $radio.find('input').click(function () {
                var $thisAnswer = $(this).parent(),
                    $thisOtherAnswers = $thisAnswer.siblings();
                $thisOtherAnswers.removeClass(str_selectedClassName);
                $thisAnswer.addClass(str_selectedClassName);
                $thisAnswer.attr('data-selected', 'selected');
                return false;
            });
        }

        return false;
    };
});