(function() {
    
    document.addEventListener("deviceready", function () {
        //var app = new kendo.mobile.Application(document.body, { skin: "flat" });
       
        navigator.splashscreen.hide();        
        var onSuccess = function(position) {
            if(typeof remoteCallback == 'function' ){
                 remoteCallback&&remoteCallback(position);
            }
            
            $('.offlineReload').click(function(){
                $.ajax({
                  url: 'http://zx.yearn.cc/js/remote.js',
                  dataType: "script",
                  success: function(){
                     loadCss('http://zx.yearn.cc/css/remote.css', function(){

                          if(typeof remoteCallback == 'function' ){
                              remoteCallback&&remoteCallback(position);
                          }
                         
                     });
                    
                },
                error:function(){
                    alert('加载失败！请确保手机已经正常联网！');
                }
                });

                return false;
            });
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
    function loadCss (cssUrl, callback) {
    var elem, bl,
        isExecuted = false; // 防止在ie9中，callback执行两次
    if ( cssUrl == null ) {
        return String(cssUrl);
    }
    elem = document.createElement('link'),
    elem.rel = 'stylesheet';
    if ( typeof(callback) === 'function' )  {
        bl = true;
    }
    // for ie
    function handle() {
        if ( elem.readyState === 'loaded' || elem.readyState === 'complete' ) {
            if (bl && !isExecuted) {
                callback();
                isExecuted = true;
            }
            elem.onreadystatechange = null;
        }
    }
    elem.onreadystatechange = handle;
    // for 非ie
    if (bl && !isExecuted) {
        elem.onload = callback;
        isExecuted = true;
    }
    elem.href = cssUrl;
    document.getElementsByTagName('head')[0].appendChild(elem);
}
}());