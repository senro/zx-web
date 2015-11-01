define(function (require,exports,module) {
    var $=jQuery=require('jquery');
    module.exports = function (arguments, attr) {
        /*
         * @位置：  核心公用方法；
         * @名字：  parseArgus；
         * @翻译：  解析参数（ 函数参数数组，属性对象 ）；
         * @参数：  parseArgus( arguments,attr )
         *         arguments(数组)：【必填】参数数组
         *         attr(对象)：【必填】属性对象；
         * @功能：  解析参数赋值给对应对象属性；
         * @返回：  无；
         * @实例：  /test-html/3.2/core/parseArgus.html；
         * @需要：  无；
         * @备注：  暂无 todo；
         */
        var j = 0;
        for (var i in attr) {
            attr[i] = objectType(arguments[0]) == 'object' ? arguments[0][i] ? arguments[0][i] : attr[i] : arguments[j] ? arguments[j] : attr[i];
            j++;
        }
        function objectType(obj) {
            if (obj instanceof jQuery) {
                return '$';
            } else if (typeof obj == 'object') {
                return 'object';
            }
            return false;
        }

    };
});