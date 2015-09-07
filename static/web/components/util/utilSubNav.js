define(function (require, exports, module) {
    var $ = require('jquery');
    var utilUser=require('utilUser');
    var authorities=utilUser.getAuthorities();

    authorities=authorities.concat([{authority:'服务设置'}]);

    var $tabBtns=$('.tabBtn');
    //$tabBtns.hide();

    for(var i=0;i<authorities.length;i++){
        var name=utilUser.authoritiesDictionary(authorities[i].authority);

        switch (name){
            case 'serviceRepair':
                $tabBtns.filter('[href="#/serviceManage/serviceRepair"]').css({display:'block','visibility':'visible','width':135});
                break;
            case 'serviceComplaints':
                $tabBtns.filter('[href="#/serviceManage/serviceComplaints"]').css({display:'block','visibility':'visible','width':135});
                break;
            case 'serviceVisit':
                $tabBtns.filter('[href="#/serviceManage/serviceVisit"]').css({display:'block','visibility':'visible','width':135});
                break;
            case 'serviceSetting':
                $tabBtns.filter('[href="#/serviceManage/serviceSetting"]').css({display:'block','visibility':'visible','width':135});
                break;
        }

    }
});