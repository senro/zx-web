/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/26
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */
define('components/util/App', ['spm_modules/jingle/Jingle.debug.qymodify'], function (require, exports, module) {
    var J=Jingle=require('spm_modules/jingle/Jingle.debug.qymodify');
    var App;
    var pages = {};
    var run = function () {
        $.each(pages, function (k, v) {
            var sectionId = '#' + k + '_section';
            $('body').delegate(sectionId, 'pageinit', function () {
                v.init && v.init.call(v);
            });
            $('body').delegate(sectionId, 'pageshow', function (e, isBack) {
                //页面加载的时候都会执行
                v.show && v.show.call(v);
                //后退时不执行
                if (!isBack && v.load) {
                    v.load.call(v);
                }
            });
        });

        J.Transition.add('flip', 'slideLeftOut', 'flipOut', 'slideRightOut', 'flipIn');


        Jingle.launch({
            showWelcome: false,
            welcomeSlideChange: function (i) {},
            showPageLoading: true,
            remotePage: {
                '#userCenter_section': 'components/userCenter_section/userCenter_section.html',
                '#login_section': 'components/login_section/login_section.html',
                '#register_section': 'components/register_section/register_section.html',
                '#main_section': 'components/main_section/main_section.html'
            }
        });



    };
    var page = function (id, factory) {
        return ((id && factory) ? _addPage : _getPage).call(this, id, factory);
    };
    var _addPage = function (id, factory) {
        pages[id] = new factory();
    };
    var _getPage = function (id) {
        return pages[id];
    };
    //动态计算chart canvas的高度，宽度，以适配终端界面
    var calcChartOffset = function () {
        return {
            height: $(document).height() - 44 - 30 - 60,
            width: $(document).width()
        }

    };
    App= {
        run: run,
        page: page,
        calcChartOffset: calcChartOffset
    };

    module.exports=App;
});