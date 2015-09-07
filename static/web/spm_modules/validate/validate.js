define(function (require,exports,module) {
    module.exports = function ($form, success_callback, fail_callback, str_msgsClassName) {
        /*
         * @位置：  常用检测方法；
         * @名字：  checkInput；
         * @翻译：  表单验证（ 表单，检测通过后的回调，提示框的类名 ）；
         * @参数：  checkInput( $form, success_callback,fail_callback, msgsClassName )
         *         $form（$）：【必填】jquery选中的需要验证的表单
         *         success_callback（函数）：【可选】检测全部通过后的回调函数
         *         fail_callback（函数）：【可选】检测未全部通过后的回调函数
         *         msgsClassName（字符串）：【可选】提示框的类名，默认：msg;
         * @功能：  表单验证，可以检测的类型：require、email、cellPhone、chinaID、password,rePassword，只需在输入框的类上加上相应的类型即可；
         * @返回：  无；
         * @实例：  /test-html/3.0/check/checkInput.html；
         * @需要：  无；
         * @备注：  todo checkbox，默认的参数需要防止命名重复
         *         其中msg不一定是input，可以是其他类型元素，至于选择标记符和提示框标记符可以通过修改对象的值修改，
         *         如：senro.checkInput.email.selecter="email1"
         *         实现原理：给此对象定义几个要检测的属性对象，他们每个对象包含它的选择符，提示框选择符，提示语言，检验状态，检测对象数组，提示
         *         框数组，方法当有输入框焦点移入时，开始执行收集所有要检测的输入框和提示框，并且存到指定的属性对象里，检验动作其实就两个状态需
         *         要检测，并且每个输入框的动作是一样的，都是点击输入框时其对应的提示框消失，当焦点移出时，用改属性对象的方法检测该输入框的值，
         *         并将其值保存在state属性数组里，如果state不正确，将错误信息放到提示框并显示出来，然后给显示出来的提示框加个点击操作，点击该
         *         提示框，让其消失，并把焦点移入其对应的输入框
         *         待改进的地方：
         *         如果第一次正确完成后，正常执行了回调函数，但是如果用户又去修改了某个值，并且该值不符合要求，但是此时因为之前已经执行过了回调，
         *         如果回调函数里是对submit按钮进行提交绑定，此时虽然信息填写错误，方法是不会去执行回调，但是之前已经绑定了，所以点submit按钮
         *         也能提交，所以应该考虑给回调函数里返回一个当前状态，或者设置两个回调函数（成功或失败）分别调用。；
         */
        var me = senro.checkInput,
            $inputs = $form.find('input'),
            msgsClassName = str_msgsClassName || '.msg',
            $msgs = $form.find(msgsClassName),
            allOk = 0,
            beginCallback = $.Callbacks("once");

        if ($msgs.length == 0) {
            alert('友情提示！没有找到提示框公用类msg，请给所有的提示框加个msg类，或者通过设置方法的最后一个可选参数自定义类名。');
        } else {
            me.require = {
                selecter: 'require',
                msgSelecter: 'requireMsg',
                msgLang: '此项为必填！',
                state: [],
                inputs: [],
                msg: [],
                method: isNull
            };
            me.email = {
                selecter: 'email',
                msgSelecter: 'emailMsg',
                msgLang: '邮箱格式不正确！',
                state: [],
                inputs: [],
                msg: [],
                method: isEmail
            };
            me.cellPhone = {
                selecter: 'cellPhone',
                msgSelecter: 'cellPhoneMsg',
                msgLang: '手机号码格式不正确！',
                state: [],
                inputs: [],
                msg: [],
                method: isCellPhone
            };
            me.chinaID = {
                selecter: 'chinaID',
                msgSelecter: 'chinaIDMsg',
                msgLang: '身份证号码格式不正确！',
                state: [],
                inputs: [],
                msg: [],
                method: isChinaID
            };
            me.checkBox = {
                selecter: 'checkBox',
                msgSelecter: 'checkBoxMsg',
                msgLang: '还有未勾选的选项！',
                state: [],
                inputs: [],
                msg: [],
                method: isChecked
            };
            me.password = {
                selecter: 'password',
                msgSelecter: 'passwordMsg',
                msgLang: '密码至少6位！',
                state: [],
                inputs: [],
                msg: [],
                method: isPassword
            };
            me.rePassword = {
                selecter: 'rePassword',
                msgSelecter: 'rePasswordMsg',
                msgLang: '两次密码不同！',
                state: [],
                inputs: [],
                msg: [],
                method: isSame
            };
            //reset form
            $form[0].reset();
            beginCallback.add(beginCheck);

            $inputs.focusin(function () {
                //如果type是text，取消默认值
                if ($(this).get(0).type == "text" || 'password') {
                    if ($(this).val() == $(this).get(0).defaultValue) {
                        $(this).val('');
                    }
                }

                //有点击才开始执行检测，以便修改的默认属性生效
                beginCallback.fire();
                return false;
            });

        }
        function beginCheck() {
            //根据类型收集要检测的元素
            $inputs.each(function (index) {
                for (var type in me) {
                    if ($inputs.eq(index).hasClass(me[type].selecter)) {
                        me[type].inputs.push($inputs.eq(index));
                        me[type].state.push(false);
                    }
                }
            });
            $msgs.each(function (index) {
                for (var type in me) {
                    if ($msgs.eq(index).hasClass(me[type].msgSelecter)) {
                        me[type].msg.push($msgs.eq(index));
                    }
                }
            });
            for (var i in me) {
                doCheck(i);
            }
        }

        function doCheck(type) {
            for (var i = 0; i < me[type].inputs.length; i++) {

                me[type].inputs[i].focusin(type, function () {
                    var i = $('.' + me[type].selecter).index(this);
                    //$(this).val('');
                    if (me[type].msg[i]) {
                        me[type].msg[i].hide();
                    }

                    return false;
                });
                //todo
                if (type == 'checkBox') {
                    me[type].state[i] = me[type].method(me[type].inputs[i].attr('checked'));
                }
                me[type].inputs[i].focusout(type, function () {
                    var i = $('.' + me[type].selecter).index(this);

                    switch (type) {
                        case 'rePassword':
                            //第二个密码框，调用方法2比较两个str是否一样，如果有三个密码的情况可能这里就待修改
                            me[type].state[i] = me[type].method(me['password'].inputs[0].val(), me[type].inputs[i].val());
                            break;
                        case 'checkBox':
                            //me[type].state[i]=me[type].method( me[type].inputs[i].attr('checked') );
                            break;
                        default :
                            me[type].state[i] = me[type].method(me[type].inputs[i].val());
                            break;
                    }

                    if (me[type].state[i] !== true) {
                        //验证不通过
                        if (me[type].msg[i]) {
                            if (me[type].msg[i].is('input')) {
                                me[type].msg[i].val(me[type].msgLang);
                            } else {
                                me[type].msg[i].html(me[type].msgLang);
                            }
                            me[type].msg[i].show();
                            me[type].msg[i].click(type, function () {
                                me[type].msg[i].hide();
                                me[type].inputs[i].focus();

                                return false;
                            });
                        } else {
                            alert(me[type].msgLang);
                        }
                    }
                    allOk = 0;
                    for (var t in me) {
                        for (var n = 0; n < me[t].state.length; n++) {
                            if (me[t].state[n] === true) {
                                allOk++;
                            } else {
                                allOk--;
                            }
                        }
                    }
                    if (allOk == $msgs.length) {
                        //按理说只能回调一次，待改进，todo
                        success_callback && success_callback();
                    } else {
                        fail_callback && fail_callback();
                    }
                    return false;
                });
            }

            return false;
        }

        function isNull(str) {
            //验证通过返回true，不通过返回false
            var str = $.trim(str);
           return str.length == 0;
        }

        function isChecked(str) {
            return str == 'checked';
        }

        function isEmail(str) {
            var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
            return myReg.test(str);
        }

        function isCellPhone(str) {
            var regu = /^[1][0-9][0-9]{9}$/;
            var re = new RegExp(regu);
            return re.test(str)
        }

        function isChinaID(str) {
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            return reg.test(str);
        }

        function isPassword(str) {
            //验证通过返回true，不通过返回false
            var str = $.trim(str);
            return str.length > 6;
        }

        function isSame(str1, str2) {
           return str1 === str2 && isPassword(str1) && isPassword(str2);
        }

        function remote(str, name, url) {
            $.getJSON(url + '?jsoncallback=?' + name + '=' + str, function (data) {

            });
        }
    }//checkInput end
});