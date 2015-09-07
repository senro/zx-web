define(function (require,exports,module) {
    var $=require('jquery');
    var routerCallbacks={};

    var $body = $('body');
    //首页
    routerCallbacks.main=function(){
        $body.load(window.baseUrl+'/components/main/main.html',function(html){
            require.async('components/main/main.js',function(main){

            });
        });
    };
    //登录
    routerCallbacks.login=function(){
        $body.load(window.baseUrl+'/components/login/login.html',function(html){
            require.async('components/login/login.js',function(login){

            });
        });
    };
    //注册
    routerCallbacks.register=function(){
        $body.load(window.baseUrl+'/components/register/register.html',function(html){
            require.async('components/register/register.js',function(register){

            });
        });
    };
    //个人中心
    routerCallbacks.userCenter=function(){
        $body.load(window.baseUrl+'/components/userCenter/userCenter.html',function(html){
            require.async('components/userCenter/userCenter.js',function(userCenter){

            });
        });
    };


    module.exports=routerCallbacks;
});