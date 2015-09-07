/**
 * Created by 001425 on 2015/6/22.
 */
define(function (require, exports, module) {
    var $ = require('jquery'),
        xhr = require('xhr'),
        jsonGet = xhr.json,
        jsonPost = xhr.jsonpost,
        apiHost = window.apiHost,
        systemMessage = require('system-message');

    var selectVillage = {
        fetchCitySuccess: function() {},
        fetchVillageSuccess: function() {},
        fetchPositionSuccess: function(){},
        $cityId: '',

        start: function ($city, $village, $position) {
            $village.attr('disabled', 'disabled');

            this.fetchCity($city);
            $village.children('option:not(:first)').remove();

            var $that = this;
            $city.off('change').on('change', function () {
                $village.attr('disabled', 'disabled').children('option:not(:first)').remove();
                if ($position)
                    $position.attr('disabled', 'disabled').children('option:not(:first)').remove();

                var $cityId = $(this).val();

                if (!$cityId) {
                    return false;
                }

                $that.$cityId = $cityId;

                $that.fetchVillage($cityId, $village);
            });

            if ($position) {
                $position.attr('disabled', 'disabled');
                $position.children('option:not(:first)').remove();
                $village.off('change').on('change', function () {
                    $position.children('option:not(:first)').remove();
                    var $villageId = $(this).val();
                    $that.fetchPosition($villageId, $position);
                });
            }
        },

        fetchCity: function ($city) {
            var $that = this;
            $city.children('option:not(:first)').remove();
            this.ajax('support/queryCityList.do', '', function (data) {
                if (data.status != 1) {
                    systemMessage.alert(data.detail || '获取城市列表失败！');
                    return false;
                }
                var citys = data.data;
                if (citys.length > 0) {
                    for (var i in citys) {
                        $city.append('<option value="' +
                            citys[i].id + '">' + citys[i].name + '</option>');
                    }
                }
              // if ($.isFunction(this.fetchCitySuccess))
                    $that.fetchCitySuccess();

            }, function () {
                systemMessage.alert('获取城市列表失败！');
            });
        },

        fetchVillage: function ($cityId, $village) {

            var $that = this;
            $village.children('option:not(:first)').remove();

            if($cityId!=-1){
                this.ajax('support/queryVillageList.do', {cityId: $cityId}, function (data) {
                    if (data.status != 1) {
                        systemMessage.alert(data.detail || '获取小区列表失败！');
                        return false;
                    }

                    var villages = data.data;
                    if (villages.length > 0) {
                        for (var i in villages) {
                            $village.append('<option value="' +
                            villages[i].id + '">' + villages[i].name + '</option>');
                        }

                        $village.removeAttr('disabled');
                    }

                    //if ($.isFunction(this.fetchVillageSuccess))
                    $that.fetchVillageSuccess();

                }, function () {
                    systemMessage.alert('获取小区列表失败！');
                });
            }else{
                $village.append('<option value="-1">集团</option>');
                $village.removeAttr('disabled');
            }

        },

        fetchPosition: function($villageId, $position) {
            if (!$villageId)
                return false;

            var $that = this;

            this.ajax('support/queryRoleList.do', {villageId: $villageId}, function (data) {
                if (data.status != 1) {
                    systemMessage.alert(data.detail || '获取职位列表失败！');
                    return false;
                }

                var positions = data.data;
                if (positions.length > 0) {
                    for (var i in positions) {
                        $position.append('<option value="' + positions[i].id +
                            '" data-isgroup="' + positions[i].isGroup + '">' + positions[i].name + '</option>');
                    }

                    $position.removeAttr('disabled');
                }

                $that.fetchPositionSuccess();

            }, function () {
                systemMessage.alert('获取职位列表失败！');
            });
        },

        ajax: function (api, data, doneCallback, failCallback) {
            $.ajax($.extend({
                url: apiHost + api,
                data: data
            }, jsonGet)).
                done(function (data) {
                    doneCallback(data);
                }).fail(function () {
                    failCallback;
                });
        }

    };


    module.exports = selectVillage;

});
