define(function (require, exports, module) {
    module.exports=[
        "var onSuccess = function(position) {",
                "$('#iframe')[0].contentWindow.postMessage('getCurrPos|:|'+JSON.stringify(position),'*');",
            "};",
        "function onError(error) {",
            "alert('code: '    + error.code    + '\n' +",
            "'message: ' + error.message + '\n');",
        "}",

        "navigator.geolocation.getCurrentPosition(onSuccess, onError);"
    ].join("");

});