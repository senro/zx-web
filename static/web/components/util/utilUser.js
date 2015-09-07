/**
 * Created by 001425 on 2015/6/24.
 */
define(function (require, exports, module) {
    var $ = require('jquery'),
        xhr = require('xhr'),
        jsonGet = xhr.json,
        jsonPost = xhr.jsonpost,
        apiHost = window.apiHost,
        cookie = require('cookie'),
        jsonstringfy = require('hw-util').JSON_stringify,
        systemMessage = require('system-message');


    var User = {
        loginCookieName: 'userObj',
        loginInfo: {},

        start: function () {
            var $loginInfo = cookie('get', this.loginCookieName);
            if (!$loginInfo) {
                this.login();

                return true;
            }

            this.loginInfo = $.parseJSON($loginInfo);
        },

        login: function () {
            window.location.href = 'login.html';
        },

        logout: function ($button) {
            var $user = this;

            $button.on('click', function () {
                var $that = $(this);

                $.ajax($.extend({
                    url: apiHost + 'logout.do',
                    beforeSend: function () {
                    }
                }, jsonPost)).
                    done(function (data) {
                        if (data.status == 1) {
                            cookie('del', this.loginCookieName);
                            $user.login();
                        } else {
                            systemMessage.alert(data.detail || '退出失败，请重试！');
                        }
                    }).fail(function () {
                        systemMessage.error('退出失败，请重试！')
                    }).
                    always(function () {
                    });
            });
        },

        isGroup: function () {
            return (this.loginInfo.isGroup == true) ? 1 : 0;
        },

        getUserInfo: function () {
            return this.loginInfo;
        },

        saveUserInfo: function ($loginInfo) {
            cookie('del', this.loginCookieName);
            cookie('set', this.loginCookieName, $loginInfo);
        },

        getName: function () {
            return this.loginInfo.name;
        },

        getMobile: function () {
            return this.loginInfo.mobile;
        },

        getRole: function() {
            return this.loginInfo.role;
        },

        setVillageId: function($villageId) {
            this.loginInfo.currentVillageId = $villageId;
            cookie('del', this.loginCookieName);
            //console.log(this.loginInfo);
            this.saveUserInfo(jsonstringfy(this.loginInfo));
        },

        getVillageId: function () {
            return this.loginInfo.currentVillageId;
        },
        authoritiesDictionary:function(name){
            switch (name){
                case  '服务':
                    return 'serviceManage';
                    break;
                case  '报修':
                    return 'serviceRepair';
                    break;
                case  '投诉':
                    return 'serviceComplaints';
                    break;
                case  '上门服务':
                    return 'serviceVisit';
                    break;
                case  '服务设置':
                    return 'serviceSetting';
                    break;
                case  '公告':
                    return 'announcements';
                    break;
                case  '住户':
                    return 'householdManage';
                    break;
                case  '收入':
                    return 'incomeManage';
                    break;
                case  '访客':
                    return 'visitorManage';
                    break;
                case  '快件':
                    return 'expressManage';
                    break;
                case  '人员':
                    return 'personnelManage';
                    break;
                case  '设置':
                    return 'systemManage';
                    break;
            }
        },
        getAuthorities: function () {
            return this.loginInfo.authorities;
        },

        getVillageList: function() {
            return this.loginInfo.selectVillageList;
        },
        getAuthoritiesNavInfo:function(name){

            var obj={
                serviceManage:{
                    display:0,
                    text:'服务管理',
                    href:'',
                    iconClass:'menu-i2',
                    subMenu:'',
                    include:{
                        'serviceRepair':{
                            display:0,
                            text:'公共报修',
                            show:false,
                            href:'#/serviceManage/serviceRepair'
                        },
                        'serviceComplaints':{
                            display:1,
                            show:false,
                            href:'#/serviceManage/serviceComplaints'
                        },
                        'serviceVisit':{
                            display:2,
                            show:false,
                            href:'#/serviceManage/serviceVisit'
                        },
                        'serviceSetting':{
                            display:3,
                            show:false,
                            href:'#/serviceManage/serviceSetting'
                        }
                    }
                },
                announcements:{
                    display:1,
                    text:'通知公告',
                    href:'',
                    iconClass:'menu-i5',
                    subMenu:'',
                    include:{
                        'notice':{
                            display:0,
                            show:true,
                            href:'#/announcements/notice'
                        },
                        'messageNotice':{
                            display:1,
                            show:true,
                            href:'#/announcements/messageNotice'
                        }
                    }
                },
                householdManage:{
                    display:2,
                    text:'住户管理',
                    href:'#/householdManage/householdManage',
                    iconClass:'menu-i6',
                    subMenu:'#/householdManage/householdManage'
                },
                incomeManage:{
                    display:3,
                    text:'收入管理',
                    href:'',
                    iconClass:'menu-i7',
                    subMenu:'',
                    include:{
                        incomeList:{
                            display:0,
                            show:true,
                            href:'#/incomeManage/incomeList'
                        },
                        paySetting:{
                            display:1,
                            show:true,
                            href:'#/incomeManage/paySetting'
                        }
                    }
                },
                visitorManage:{
                    display:4,
                    text:'访客管理',
                    href:'#/visitorManage/visitorManage',
                    iconClass:'menu-i3',
                    subMenu:'#/visitorManage/visitorManage'
                },
                expressManage:{
                    display:5,
                    text:'快件管理',
                    href:'',
                    iconClass:'menu-i4',
                    subMenu:'',
                    include: {
                        expressList: {
                            display: 0,
                            show:true,
                            href:'#/expressManage/expressList'
                        },
                        ownersDelivery: {
                            display: 1,
                            show:true,
                            href:'#/expressManage/ownersDelivery'
                        }
                    }
                },
                personnelManage:{
                    display:6,
                    text:'人员管理',
                    href:'',
                    iconClass:'menu-i8',
                    subMenu:'',
                    include: {
                        personnelManage: {
                            display: 0,
                            show:true,
                            href:'#/personnelManage/personnelManage'
                        },
                        personalRepair: {
                            display: 1,
                            show:true,
                            href:'#/personnelManage/personalRepair'
                        },
                        personalService: {
                            display: 2,
                            show:true,
                            href:'#/personnelManage/personalService'
                        },
                        positionManage: {
                            display: 3,
                            show:true,
                            href:'#/positionManage/positionManage'
                        }
                    }
                },
                systemManage:{
                    display:7,
                    show:true,
                    text:'系统设置',
                    href:'#/systemManage/systemManage',
                    iconClass:'menu-i1',
                    subMenu:'#/systemManage/systemManage'
                }
            };
            var User=this;
            var authorities=User.getAuthorities();

            //通过权限配置菜单显示表
            if(authorities&&authorities.length>0){
                for(var i=0;i<authorities.length;i++){
                    var authoritedNavName=User.authoritiesDictionary(authorities[i].authority);
                    for(var navName in obj){
                        if(authoritedNavName==navName){
                            obj[authoritedNavName].show=true;
                        }else if(obj[navName].include){
                            for( subNavName in obj[navName].include){
                                if(subNavName==authoritedNavName){
                                    obj[navName].include[authoritedNavName].show=true;
                                }
                            }
                        }
                    }
                }
            }else{
                //alert('权限设置有问题：'+jsonstringfy(authorities));
                window.location.href='login.html';
            }

            //通过权限配置菜单跳转链接

            for(var navName in obj){
                if(obj[navName].include){
                    var subMenu=[];
                    for( subNavName in obj[navName].include){
                        if(obj[navName].include[subNavName].show&&obj[navName].href==''){
                            //默认设置跳转到子菜单的第一个
                            obj[navName].href=obj[navName].include[subNavName].href;
                        }
                        subMenu.push(obj[navName].include[subNavName].href);
                    }
                    obj[navName]['subMenu']=subMenu.join(',');
                }
            }

            return obj;
        },
        setName: function ($name) {
            this.loginInfo.name = $name;
            cookie('del', this.loginCookieName);
            //console.log(this.loginInfo);
            this.saveUserInfo(jsonstringfy(this.loginInfo));
        },

        setMobile: function ($mobile) {
            this.loginInfo.mobile = $mobile;
            this.saveUserInfo(jsonstringfy(this.loginInfo));
        }


    };

    User.start();

    return User;
});