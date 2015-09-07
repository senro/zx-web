/**
 * Created by 001425 on 2015/6/17.
 */
define(function (require, exports, module) {
    var $ = require('jquery');

    var utilDataSelected = {
        /**
         * 返回数组格式的, egg:[4,5,6,7,8]
         * @param object
         *
         * @returns Array
         */
        fetchByArray: function ($object) {
            var $select_checkbox = new Array();

            $object.each(function () {
                if ($(this).attr('data-selected') == 'selected' || $(this).attr('selected') == 'selected') {
                    var $value = $.trim($(this).attr('value'));
                    if ($value)
                        $select_checkbox.push($value);
                }
            });

            return $select_checkbox;
        },

        fetchAllByArray: function ($object) {
            var $select_checkbox = new Array();

            $object.each(function () {
                var $value = $.trim($(this).attr('value'));
                if ($value)
                    $select_checkbox.push($value);
            });

            return $select_checkbox;
        },

        /**
         * 返回字符串格式的，egg:4,5,6,7,8,9
         * @param object
         *
         * @returns String
         */
        fetchByString: function ($object, $join, $all) {
            if ($all == 1)
                return this.joinUs(this.fetchAllByArray($object));
            else
                return this.joinUs(this.fetchByArray($object));
        },

        /**
         * 拼装, egg: ["roles[0].roleId=2", "roles[1].roleId=2", "roles[2].roleId=2"]
         * @param $object
         * @param $pre 如roles[@me].roleId=
         *
         * @returns Array
         */
        packByArray: function ($object, $pre, $all) {
            if ($all)
                var $select_checkbox = this.fetchAllByArray($object);
            else
                var $select_checkbox = this.fetchByArray($object);

            if ($select_checkbox.length == 0)
                return new Array('');

            var $_select_checkbox = new Array();
            for (var i = 0; i < $select_checkbox.length; i++) {
                var $_pre = $pre.replace('@me', i);
                $_select_checkbox.push($_pre + $select_checkbox[i]);
            }

            return $_select_checkbox;
        },

        packAllByArray: function ($object, $pre) {
            return this.packByArray($object, $pre, 1);
        },

        /**
         * 拼装, egg:roles[0].roleId=2&roles[1].roleId=2&roles[2].roleId=2
         * @param $object
         * @param $pre 如roles[@me].roleId=
         *
         * @returns String
         */
        packByString: function ($object, $pre) {
            return this.joinUs(this.packByArray($object, $pre), '&');
        },

        packAllByString: function ($object, $pre) {
            return this.joinUs(this.packAllByArray($object, $pre), '&');
        },

        joinUs: function ($array, $join) {
            if (typeof($array) != 'object' || $array.length == 0)
                return false;

            if (!$join)
                $join = ',';

            return $array.join($join);
        }

    }

    return utilDataSelected;
});