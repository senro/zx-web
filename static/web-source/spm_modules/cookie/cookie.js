define(function(require,exports,module) {
    module.exports = function(str_type,str_name,str_value){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  cookie；
         * @翻译：  cookie操作（ 操作类型，名字，值 ）；
         * @参数：  cookie( type,name,value )
         *         type（字符串）：【必填】操作类型:'get','set','del'
         *         name（字符串）：【必填】cookie名字
         *         value（字符串）：【可选】值;
         * @功能：  cookie操作；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/cookie.html；
         * @需要：  无；
         * @备注：  待测试；
         */
        var name=str_name||'',
            value=str_value||'',
            returnValue;
        switch(str_type){
            case 'get':
                returnValue=getCookie(name);
                break;
            case 'set':
                setCookie(name,value);
                break;
            case 'del':
                delCookie(name);
                break;
        }
        function setCookie(name,value){
            //设置cookie,两个参数，一个是cookie的名子，一个是值
            var Days = 30; //此 cookie 将被保存 30 天
            var exp  = new Date();    //new Date("December 31, 9998");
            exp.setTime(exp.getTime() + Days*24*60*60*1000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        }
        function getCookie(name){
            if (document.cookie.length>0)
            {
                c_start=document.cookie.indexOf(name + "=");
                if (c_start!=-1)
                {
                    c_start=c_start + name.length+1;
                    c_end=document.cookie.indexOf(";",c_start);
                    if (c_end==-1){
                        c_end=document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start,c_end));
                }
            }
            return ""
        }
        function delCookie(name){//删除cookie
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval=getCookie(name);
            if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
        }

        return returnValue||false;
    };
});