define(function (require,exports,module) {

    var base = require('base'),
        sessionStorage = base.sessionStorage,
        apiHost = base.apiHost,
        userId = base.userId,
        defCityId = base.cityId,
        defCityName = base.cityName;

    var $ = require('jquery');

    var xhr = require('xhr'),
        json = xhr.json,
        doneCallback = xhr.done,
        failCallback = xhr.fail;

    var template = require('template');

    var systemMessage = require('system-message');

    var EventProxy = require('event-proxy'),
        proxy = new EventProxy();


    var tpl =
            '<% $each(data.content, function(item, i){ %>' +
            '<option value="<%= item.areaId %>"><%= item.areaName %></option>' +
            '<% }); %>',

        areaTplTit = '<option selected="selected" value="">请选择区</option>',
        areaTpl = areaTplTit +
            '<% $each(data.content, function(item, i){ %>' +
            '<option value="<%= item.areaId %>"><%= item.areaName %></option>' +
            '<% }); %>',
        areaRender = template.compile(areaTpl),

        streetTplTit = '<option selected="selected" value="">请选择街道</option>',
        streetTpl = streetTplTit +
            '<% $each(data.content, function(item, i){ %>' +
            '<option value="<%= item.streetId %>"><%= item.streetName %></option>' +
            '<% }); %>',
        streetRender = template.compile(streetTpl);

//    1、城市列表接口
//    /common/cityList.do?dateVersion=12345
//
//    2、按城市搜区接口
//    /common/areaListByCityId.do?cityId=420900
//
//    3、按区搜街道接口
//    /common/streetListByAreaId.do?areaId=420902
//
//    4、大区城市列表接口：
//    /common/cityListGroupByBigArea.do

    var $body = $('body'),
        $selectCityWrap,
        $currentCityName,
        $currentCityId,
        $selectCityBtn,
        $changeCityModal,
        currentCityHtml =
            '<strong class="current-city-name">'+ defCityName +'</strong>' +
            '<a class="select-city-btn btn btn-info select-city pull-left">切换城市</a>' +
            '<input type="hidden" value="' + defCityId + '" name="cityId">',

        changeCityModalHtml =
            '<div class="modal fade" id="changeCityModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-lg">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
            '<h4 class="modal-title">请选择城市</h4>' +
            '</div>' +
            '<div class="modal-body"><a class="city-link" data-id="420900" data-name="abcde" href="sfs"></a></div>' +
            '</div>' +
            '</div>' +
            '</div>',

        nationwideHtml =
            '<table class="allCityListTable table table-hover">'+
            '   <tr><th>全国</th><td><a class="city-link" data-id="-1" data-name="全国" href="#">全国</a></td></tr>'+
            '</table>',

        allCityTpl =
            '<% $each(data.content, function(bigArea, bai){ %>' +
            '<table class="allCityListTable table table-hover">' +
            '<caption><%= bigArea.bigAreaName %></caption>' +
            '<tbody>' +
            '<% $each(bigArea.provinceList, function(province, pi){ %>' +
            '<tr>' +
            '<th><%= province.provinceName %></th>' +
            '<td>' +
            '<% $each(province.cityList, function(city, ci){ %>' +
            '<a class="city-link" data-id="<%= city.cityId %>" data-name="<%= city.cityName %>" href="#"><%= city.cityName %></a>' +
            '<% }); %>' +
            '</td>' +
            '</tr>' +
            '<% }); %>' +
            '</tbody>' +
            '</table>' +
            '<% }); %>',
        allCityRender = template.compile(allCityTpl);

    /**
     * 城市选择
     * 可选的关联小区
     * 可选的关联街道
     * @param $selectCityBox 必选
     * @param $area
     * @param $street
     * @param isNationwide 是否全国
     */
    function bind($selectCityBox, $area, $street, callback, isNationwide) {

        var isNationwide = true;  // isNationwide || false;       // 是否显示全国

        if ($.isFunction($area)) {
            callback = $area;
            $area = false;
        }

        if ($.isFunction($street)) {
            callback = $street;
            $street = false;
        }

        if (!$selectCityBox) {
            systemMessage('缺少 $selectCityBox');
            return this;
        }
        // 仅初化一次
        if ($selectCityWrap) {
            return this;
        }

        $selectCityBox.html(currentCityHtml);
        $selectCityWrap = $selectCityBox;
        $currentCityName = $selectCityWrap.find('.current-city-name');
        $currentCityId = $selectCityWrap.find('[name="cityId"]');
        $selectCityBtn = $selectCityWrap.find('.select-city-btn');

        $changeCityModal = $(changeCityModalHtml);
        $body.append($changeCityModal);
        getAllCityList(function (data) {
            var bigArea = data.data.content || [],
                allCityStr = '';

            if(isNationwide) {
                allCityStr += nationwideHtml;
            }
            allCityStr += allCityRender(data);
            $changeCityModal.find('.modal-body').html(allCityStr);
        });

        if ($area && !$street) {
            // 只关联小区
            bindArea($currentCityId.val() || defCityId, $area);
        } else if ($area && $street) {
            // 关联小区与街道
            bindAreaAndStreet($currentCityId.val() || defCityId, $area, $street);
        }

        $changeCityModal.on('click', 'a.city-link', function (e) {
            var $context = $(this);

            if (e) {
                e.preventDefault();
            }

            var cName = $context.attr('data-name') || defCityName,
                cId = $context.attr('data-id') || defCityId;

            $currentCityName.html( cName );
            $currentCityId.val( cId );

            // 写入数据库，以便下次登录时候使用  写入本地，以便下个页面使用
            if(cName != '全国') {
                updateDefCity(userId, cId, cName);
            }

            if ($area) {
                getAreaListByCityId(cId, function (data) {
                    proxy.trigger('bindAreaList', data);
                });
            }

            $changeCityModal.modal('hide');

            // 重新查询
            if ($.isFunction(callback)) {
                callback(); // $selectCityBox.parents('form').trigger('submit');
            }
        });

        // 需要选择城市列表加进，并添加好点击事件
        $selectCityBtn.on('click', function () {
            $changeCityModal.modal('toggle');
        });
    }


    /**
     * 获取大区下的所有城市
     * @param callback
     */
    function getAllCityList(callback) {
        $.ajax($.extend({
            url: apiHost + '/common/cityListGroupByBigArea.do',
            beforeSend: function () {}
        }, json)).
        done(function (data) {
            if (!$.isFunction(callback)) {
                callback = function () {};
            }
            doneCallback.call(this, data, callback);
        }).
        fail(function (jqXHR) {
            failCallback.call(this, jqXHR, '获取大区下的所有城市失败！');
        });
    }

    /**
     * 根据城市ID获取城区列表
     * @param cityId
     * @param callback
     * @param newBack 新回调
     */
    function getAreaListByCityId(cityId, callback) {
        var params = {};

        if (!cityId) {
            systemMessage('缺少城市ID！');
            return;
        }

        params.cityId = cityId;

        $.ajax($.extend({
            url: apiHost + '/common/areaListByCityId.do',
            data: params,
            beforeSend: function () {}
        }, json)).
        done(function (data) {
            if (!$.isFunction(callback)) {
                callback = function () {};
            }
            doneCallback.call(this, data, callback);

        }).
        fail(function (jqXHR) {
            failCallback.call(this, jqXHR, '根据城市ID获取城区列表失败！');
        });
    }

    /**
     * 根据城区ID获取所有街道列表
     * @param areaId
     * @param callback
     */
    function getStreetListByAreaId(areaId, callback) {
        var params = {};

        if (!areaId) {
            systemMessage('缺少城区ID！');
            return;
        }

        params.areaId = areaId;

        $.ajax($.extend({
            url: apiHost + '/common/streetListByAreaId.do',
            data: params,
            beforeSend: function () {}
        }, json)).
        done(function (data) {
            if (!$.isFunction(callback)) {
                callback = function () {};
            }
            doneCallback.call(this, data, callback);
        }).
        fail(function (jqXHR) {
            failCallback.call(this, jqXHR, '根据城区ID获取所有街道列表！');
        });
    }

    /**
     * 关联小区
     * @param cityId
     * @param $area
     * @param aId
     */
    function bindArea(cityId, $area, aId) {
        // 默认选中，初始化时
        $area.one('change.selected', function (e, id) {
            setSelectedById($area, id);
        });

        if (cityId === '') {
            $area.
                html(cityTplTit).
                prop('disabled', true);
            return false;
        }

        function bindAreaList(data) {
            var dataObj = data.data || {};

            if (!$.isArray(dataObj.content) || !dataObj.content.length) {
                $area.
                    html(areaTplTit).
                    prop('disabled', true);
                return false;
            }

            $area.
                html(areaRender(data)).
                prop('disabled', false);

            $area.trigger('change.selected', aId);
        }
        proxy.on('bindAreaList', bindAreaList);

        getAreaListByCityId(cityId, function (data) {
            proxy.trigger('bindAreaList', data);
        });
    }

    /**
     * 关联小区与街道
     * @param cityId
     * @param $area
     * @param $street
     * @returns {boolean}
     */
    function bindAreaAndStreet(cityId, $area, $street) {
        if (cityId === '') {
            $area.
                html(areaTplTit).
                prop('disabled', true);
            return false;
        }

        $area.
            html(areaTplTit);
        $street.html(streetTplTit).
            prop('disabled', true);

        function bindAreaList(data) {
            var dataObj = data.data || {};

            if (!$.isArray(dataObj.content) || !dataObj.content.length) {
                $area.
                    html(areaTplTit).
                    prop('disabled', true);
                return false;
            }

            $street.html(streetTplTit).
                prop('disabled', true);

            $area.
                html(areaRender(data)).
                prop('disabled', false);

            $area.on('change', function () {
                var $context = $(this),
                    areaId = $.trim($context.val());

                if (areaId === '') {
                    $street.html(streetTplTit).
                        prop('disabled', true);
                    return false;
                }

                getStreetListByAreaId(areaId, function (data) {
                    proxy.trigger('bindStreetList', data);
                });
            });
        }

        proxy.on('bindAreaList', bindAreaList);

        function bindStreetList(data) {
            var dataObj = data.data || {};

            if (!$.isArray(dataObj.content) || !dataObj.content.length) {
                $street.
                    html(streetTplTit).
                    prop('disabled', true);
                return false;
            }

            $street.
                html(streetRender(data)).
                prop('disabled', false);
        }

        proxy.on('bindStreetList', bindStreetList);


        getAreaListByCityId(cityId, function (data) {
            proxy.trigger('bindAreaList', data);
        });
    }

    /**
     * 更新默认城市
     * @param id
     * @param name
     */
    function updateDefCity(uId, cId, cName) {
        $.ajax($.extend({
            url: apiHost + '/common/setDefaultCity.do',
            data: {
                userId: uId || userId,
                cityId: cId
            },
            beforeSend: function () {}
        }, json)).
            done(function (data) {
                function useful(data) {
                    var sessionData = JSON.parse(sessionStorage.getItem('run_sessionData')) || {};

                    sessionData.cityId = cId;
                    sessionData.cityName = cName;

                    sessionStorage.setItem('run_sessionData', JSON.stringify(sessionData));
                }

                function useless(data) {
                    systemMessage({
                        type: 'info',
                        title: '提示：',
                        detail: data.detail || '更新默认城市失败！'
                    });
                }

                doneCallback.call(this, data, useful, useless);
            }).
            fail(function (jqXHR) {
                failCallback.call(this, jqXHR, '更新默认城市失败！');
            });
    }

    /**
     * 根据 option 的值 id ，设置该 option 为选中
     * @param $select
     * @param id
     */
    function setSelectedById($select, id) {
        try {
            $select.find('[value='+ id +']').prop('selected', true);
        } catch (e) {}
    }


    return {
        bind: bind,
        getAreaListByCityId: getAreaListByCityId,
        getStreetListByAreaId: getStreetListByAreaId
    };

});