define(function(require,exports,module) {
    var $=require('jquery');

    function JSON_stringify(obj) {
        //如果是IE8+ 浏览器(ff,chrome,safari都支持JSON对象)，使用JSON.stringify()来序列化
        if (window.JSON) {
            return JSON.stringify(obj);
        }
        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string") obj = '"' + obj + '"';
            return String(obj);
        } else {
            // recurse array or object
            var n, v, json = [], arr = (obj && obj.constructor == Array);

            // fix.
            var self = arguments.callee;

            for (n in obj) {
                v = obj[n];
                t = typeof(v);
                if (obj.hasOwnProperty(n)) {
                    if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null)
                    // v = jQuery.stringify(v);
                        v = self(v);
                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }
            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    }
    function isTimeOverdue(beginTime,endTime,callback,type){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  isTimeOverdue；
         * @翻译：  时间是否过期（ 开始时间，结束时间,倒计时回调 ）；
         * @参数：  isTimeOverdue( beginTime,endTime,callback )
         *         beginTime(字符串)：【必填】开始时间：yyyy-mm-dd hh:mi:ss
         *         endTime(字符串)：【必填】结束时间：yyyy-mm-dd hh:mi:ss
         *         callback(函数)：【可选】倒计时回调函数，实时返回{day:day,hour:hour,min:min,sec:sec}；
         * @功能：  如果开始时间大于结束时间，即为已过期，则返回true，如果开始时间小于结束时间，即为未过期，则返回false，如果有回调则返回剩余时间的倒计时;
         * @返回：  布尔值；
         * @实例：  /test-html/3.2/dataInteractive/isTimeOverdue.html；
         * @需要：  无；
         * @备注：  暂无 todo；
         */
        var normalEndTime=normalized(endTime);
        var normalStartTime=normalized(beginTime);

        var lastTime=normalEndTime-normalStartTime,
            type=type||'back';

        if(!callback){
            if(lastTime>0){
                return false;
            }else{
                return true;
            }
        }else{
            var countDown=setInterval(function(){
                if(type=='back'){
                    if(lastTime>0){
                        lastTime-=1000;
                    }else{
                        lastTime=0;
                        clearInterval(countDown);
                    }
                }else{
                    lastTime+=1000;
                }


                callback&&callback(parseTime(lastTime));
            },1000);
        }

        function normalized(date){
            //MM-dd-yyyy HH:mm:ss
            if(/\-/g.test(date)){
                var time=date.replace(/ /g,'T').replace(/\-/g,'/');
                var year=time.split('T')[0].split('/')[0];
                var month=noZero(time.split('T')[0].split('/')[1]);
                var day=noZero(time.split('T')[0].split('/')[2]);
                var hour=noZero(time.split('T')[1].split(':')[0]);
                var min=noZero(time.split('T')[1].split(':')[1]);
                var sec=noZero(time.split('T')[1].split(':')[2]);

                return (new Date(year,month-1,day,hour,min,sec));
//            return (new Date(date.replace(/ /g,'T').replace(/\-/g,'/')));
            }else if(/\//g.test(date)){
                return Date.parse(date);
            }else{
                return date;
            }
            function noZero(num){
                if(/0[0-9]/g.test(num)){

                    return num.split('0')[1];
                }else{
                    return num;
                }
            }
            //return dateObj.parse(date);
        }
        function parseTime(time){
            var ms =parseInt(time),
                day=Math.floor(ms/1000/60/60/24),
                hour=Math.floor(ms/1000/60/60%24),
                min=Math.floor(ms/1000/60%60),
                sec=Math.floor(ms/1000%60);

            return {day:day,hour:hour,min:min,sec:sec}
        }

        return false;
    }//isTimeOverdue end
    function random (min,max){
        /*
         * @位置：  核心公用方法；
         * @名字：  random；
         * @翻译：  随机区间（ 开始数，结束数 ）；
         * @参数：  random( min, max )
         *         min，max为数字【必填】；
         * @功能：  返回在min到max区间的随机数，返回值包括min，不包括max；
         * @返回：  随机数（int）；
         * @实例：  /test-html/3.2/core/random.html；
         * @需要：  无；
         * @备注：  暂无；
         */
        return Math.floor(min+Math.random()*(max-min));
    }//random end
    exports.JSON_stringify = JSON_stringify;
    exports.isTimeOverdue = isTimeOverdue;
    exports.random = random;
});