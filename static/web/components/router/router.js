define(function (require,exports,module) {

    module.exports=function(){
        var Router=require('director').Router;
        var routerCallbacks=require('./routerCallbacks');

        //定义路由
        var route = {
            //系统管理
            "/main":routerCallbacks.main,
            //服务管理
            "/login":routerCallbacks.login,
            "/register":routerCallbacks.register,
            "/userCenter":routerCallbacks.userCenter
        };

        //初始化路由
        var router =Router(route).configure({
            notfound:function(){
                window.location.href='/';
            }
        });
        router.init();

    };

});