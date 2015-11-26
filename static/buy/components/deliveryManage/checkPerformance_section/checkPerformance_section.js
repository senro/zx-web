/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/deliveryManage/checkPerformance_section/checkPerformance_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/date-extend/0.0.1/date-extend', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var dateExtend=require('spm_modules/date-extend/0.0.1/date-extend');

    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('Number',Number);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('checkPerformance', function () {
        this.show=function(){
            var $currSection = $('#checkPerformance_section');
            var staffId =getQueryString('staffId', $currSection.data('query'));
            var staffName=getQueryString('staffName', $currSection.data('query'));

            $currSection.find('.title .name').html(staffName);

            //加载绩效
            var item_detail_table_item_tpl="<table class=\"performance-table performance-table-today\">\n    <tr>\n        <td>\n            今日接单：\n        </td>\n        <td class=\"textRight\">\n            <%= data.todayReceive %>\n            单\n        </td>\n    </tr>\n    <tr>\n        <td>今日派送：</td>\n        <td class=\"textRight\">\n            <%= data.todayDeliver %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>今日去重订单数：</td>\n        <td class=\"textRight\">\n            <%= data.todayOrder %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>派送平均耗时：</td>\n        <td class=\"time textRight\" data-time=\"<%= data.todayTime %>\">\n\n        </td>\n    </tr>\n</table>\n<hr/>\n<table class=\"performance-table performance-table-month\">\n    <tr>\n        <td>本月接单：</td>\n        <td class=\"textRight\">\n            <%= data.monthReceive %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>本月派送：</td>\n        <td class=\"textRight\">\n            <%= data.monthDeliver %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>本月去重订单数：</td>\n        <td class=\"textRight\">\n            <%= data.monthOrder %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>派送平均耗时：</td>\n        <td class=\"time textRight\" data-time=\"<%= data.monthTime %>\">\n\n        </td>\n    </tr>\n</table>\n<hr/>\n<table class=\"performance-table performance-table-history\">\n    <tr>\n        <td>历史接单：</td>\n        <td class=\"textRight\">\n            <%= data.historyReceive %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>历史派送：</td>\n        <td class=\"textRight\">\n            <%= data.historyDeliver %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>历史去重订单数：</td>\n        <td class=\"textRight\">\n            <%= data.historyOrder %> 单\n        </td>\n    </tr>\n    <tr>\n        <td>派送平均耗时：</td>\n        <td class=\"time textRight\" data-time=\"<%= data.historyTime %>\">\n\n        </td>\n    </tr>\n</table>\n";
            $.ajax({
                url: apiHost + 'areaManagement/queryDelivererAchievements.do',
                dataType: 'json',
                data:{
                    key:window.userObj.account.key,
                    staffId :getQueryString('staffId', $currSection.data('query'))
                },
                success: function (data) {
                    if (data.status == 1) {
                        if(data.data){
                            var render=template.compile(item_detail_table_item_tpl);
                            $currSection.find('.scrollWrapper').html(render(data));
                            //计算已用时间
                            var $tags=$currSection.find('.time');
                            $tags.each(function(){
                                var $this=$(this),
                                    time=$this.attr('data-time'),
                                    timeObj=dateExtend.parseTime(time,'s');
                                $this.html((timeObj.day!=0?(timeObj.day+'天'):'')+(timeObj.hour!=0?(timeObj.hour+'时'):'')+timeObj.min+'分');
                            });

                        }
                    } else if (data.status == '-99') {
                        J.Router.goTo('#login_section');
                        //根据缓存自动填写手机号
                        if (userObj.account && userObj.account.mobile) {
                            $('.input-cellphone').val(userObj.account.mobile);
                        }
                    } else {
                        J.showToast(data.detail, 'error');
                    }

                },
                beforeSend: function () {

                },
                complete: function () {

                }
            });
        };
        this.init = function () {

        }
    });

});