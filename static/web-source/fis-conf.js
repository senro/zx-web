// 只需要编译 html 文件，以及其用到的资源。
fis.set('project.files', ['*.html', 'map.json']);

//fis.match('components/**.css', {
//    //发布到/static/css/xxx目录下
//    //release : '/static/css$0',
//    //访问url是/pp/static/css/xxx
//    url: '/web$0'
//});
//fis.match('static/**', {
//    //发布到/static/css/xxx目录下
//    //release : '/static/css$0',
//    //访问url是/pp/static/css/xxx
//    url: '/web$0'
//});

fis.match('*.js', {
    isMod: true
});

fis.match('/static/lib/*.js', {
    isMod: false
});

fis.hook('cmd', {
    baseUrl: '/',

    paths: {
        "signals": "components/signals/signals.js",
        "navigation": "components/navigation/navigation.js",
        "header": "components/header/header.js",
        "footer": "components/footer/footer.js",
        "login": "components/account/login/login.js",
        "logout": "components/account/logout/logout.js",
        "router": "components/router/router.js",

        "App": "components/util/App.js",
        "signal": "spm_modules/signal/signal.js",
        "zepto": "spm_modules/zepto/zepto.js",
        "iscroll": "spm_modules/iscroll/iscroll.js",
        "jingle": "spm_modules/jingle/Jingle.debug.qymodify.js",

        "page": "spm_modules/page/page.js",
        "director": "spm_modules/director/director.js",
        "jquery": "spm_modules/jquery/1.11.3/jquery.js",
        "base": "spm_modules/base/base.js",
        "xhr": "spm_modules/xhr/xhr.js",
        "ajax": "spm_modules/ajax/ajax.js",
        "system-message": "spm_modules/system-message/system-message.js",
        "spin": "spm_modules/spin/spin.js",
        "template": "spm_modules/template/3.0.0/template.js",
        "accounting": "spm_modules/accounting/accounting.js",
        "ajaxfileupload": "spm_modules/ajaxfileupload/ajaxfileupload.js",
        "area-picker": "spm_modules/area-picker/area-picker.js",
        //"audioplayer": "audioplayer/audioplayer.js"
        "change-city": "spm_modules/change-city/change-city.js",
        "checkSubmit": "spm_modules/checkSubmit/checkSubmit.js",
        "date-extend": "spm_modules/date-extend/date-extend.js",
        //"echarts-plain": "echarts-plain/echarts-plain.js"
        "event-proxy": "spm_modules/event-proxy/event-proxy.js",
        "get-query-string": "spm_modules/get-query-string/get-query-string.js",
        "select-checkbox": "spm_modules/select-checkbox/select-checkbox.js",

        'autocomplete': 'spm_modules/autocomplete/autocomplete.js',
        'datepicker': 'spm_modules/datepicker/datepicker.js',
        'datetimepicker': 'spm_modules/datetimepicker/datetimepicker.js',
        'pagination': 'spm_modules/pagination/pagination.js',
        'placeholder': 'spm_modules/placeholder/placeholder.js',
        'emojify': 'spm_modules/emojify/emojify.js',
        'ztree': 'spm_modules/ztree/ztree.js',
        'summernote': 'spm_modules/summernote/summernote.js',
        'radio': 'spm_modules/hw-radio/0.0.1/hw-radio.js',
        'checkbox': 'spm_modules/hw-checkbox/0.0.1/hw-checkbox.js',
        'parseArgus': 'spm_modules/hw-parseArgus/hw-parseArgus.js',
        'tab': 'spm_modules/hw-tab/hw-tab.js',
        'jquery-qrcode': 'spm_modules/jquery-qrcode/jquery.qrcode.js',
        'boot': 'static/js/bootstrap/3.2.0/bootstrap',
        'wn-core': 'spm_modules/wn-core/0.0.4/wn-core.js',
        'wn-controlpop': 'spm_modules/wn-controlpop/0.0.4/wn-controlpop.js',
        'hw-util': 'spm_modules/hw-util/hw-util.js',
        'cookie': 'spm_modules/cookie/cookie.js',
        'utilUser': 'components/util/utilUser.js',
        'mock': 'spm_modules/mock/mock.js',
        'validate': 'spm_modules/validate/validate.js',
        'sweetalert': 'spm_modules/sweetalert/dist/sweetalert.min.js'

    }
});

fis.match('::packager', {
    postpackager: fis.plugin('loader')
});


// 注意： fis 中的 sea.js 方案，不支持部分打包。
// 所以不要去配置 packTo 了，运行时会报错的。

//公网环境
var env_prod_apiHost='/web';
var env_prod_baseUrl='/web';

fis
    .media('prod')
    .match('/static/**', {
        url: env_prod_baseUrl+'$0'
    })
    .match('/components/**', {
        url: env_prod_baseUrl+'$0'
    })
    .match('/spm_modules/**.js', {
        // 通过 uglify 压缩 js
        // 记得先安装：
        // npm install [-g] fis-optimizer-uglify-js
        //url: env_prod_baseUrl,
        url: env_prod_baseUrl+'$0',
        optimizer: fis.plugin('uglify-js')
    })
    .match('::packager', {
        postpackager: fis.plugin('loader', {
            resoucemapUrl:env_prod_baseUrl+'/pkg/${filepath}_map.js'
            //allInOne: {
            //    includeAsyncs: true,
            //    css: '/pkg/${filepath}_aio.css',
            //    js: '/pkg/${filepath}_aio.js',
            //    urlCss: env_prod_baseUrl+'/pkg/${filepath}_aio.css',
            //    urlJs: env_prod_baseUrl+'/pkg/${filepath}_aio.js',
            //    ignore: ['/static/lib/sea.js']
            //}
        })
    });
