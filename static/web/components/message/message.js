/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/9/10
 * Time: 18:25
 * To change this template use File | Settings | File Templates.
 */
define(function (require, exports, module) {
    var signals=require('signals');

    function init(){
        window.addEventListener('message',function(e){
            //alert(e.origin);
            if(e.origin=="file://"){
                var msgId=e.data.split('|:|')[0],
                    msgData=e.data.split('|:|')[1];

                switch(msgId){
                    case 'getCurrPos':
                        //exports.getCurrPos=JSON.parse(msgData);
                        alert(msgData);
                        signals.getCurrPos.dispatch(JSON.parse(msgData));
                        break;
                    case 'cameraCode':
                        //$('#cameraImg').attr('src',"data:image/jpeg;base64," + msgData);
                        break;
                    case 'pickContact':
                        //exports.getCurrPos=JSON.parse(msgData);
                        alert(msgData);
                        //signals.getCurrPos.dispatch(JSON.parse(msgData));
                        break;

                }
            }
            //window.parent.postMessage(color,'*');
        },false);
    }

    exports.init=init;
});