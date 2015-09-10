define(function (require, exports, module) {
    module.exports=[
        "var onSuccess = function(position) {",
                "$('#iframe')[0].contentWindow.postMessage('getCurrPos|:|'+JSON.stringify(position),'*');",
            "};",
        "var onError = function(error) {",
            "alert('code:'+ error.code +',message: ' + error.message);",
        "}",

        "navigator.geolocation.getCurrentPosition(onSuccess, onError);"
    ].join("\n");

});