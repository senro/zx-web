/**
 * Created with WebStorm.
 * User: qiuyun
 * Date: 15-9-5
 * Time: 上午10:20
 * To change this template use File | Settings | File Templates.
 */
define('components/main_section/main_section', ['spm_modules/zepto/zepto', 'spm_modules/jingle/Jingle.debug.qymodify', 'components/util/App', 'components/signals/signals', 'spm_modules/cookie/cookie', 'spm_modules/template/3.0.0/template', 'components/cordova/geolocation/getCurrPos', 'components/cordova/camera/getPicture'], function(require, exports, module){

    var $=require('spm_modules/zepto/zepto');
    var J=require('spm_modules/jingle/Jingle.debug.qymodify');
    var App=require('components/util/App');
    var signals=require('components/signals/signals');
    var cookie=require('spm_modules/cookie/cookie');
    var template=require('spm_modules/template/3.0.0/template');

    App.page('main', function () {
        this.init = function () {
            window.userObj=JSON.parse(cookie('get','userObj'));

            // 百度地图API功能

            var map = new BMap.Map("map");    // 创建Map实例
            //获取定位信息
            signals.getCurrPos.add(function(position){
                //alert('获取地理位置成功：'+position.coords.longitude+','+position.coords.latitude);
                map.centerAndZoom(new BMap.Point(position.coords.longitude, position.coords.latitude), 11);  // 初始化地图,设置中心点坐标和地图级别
            });
            window.parent.postMessage(require('components/cordova/geolocation/getCurrPos'),'*');

            //设置默认位置北京
            var beijingPoint = new BMap.Point(116.32715863448607,39.990912172420714);
            map.centerAndZoom(beijingPoint, 10);  // 初始化地图,设置中心点坐标和地图级别

            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            //map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

            // 添加带有定位的导航控件
            var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
            });
            map.addControl(navigationControl);
            // 添加定位控件
            var geolocationControl = new BMap.GeolocationControl();
            geolocationControl.addEventListener("locationSuccess", function(e){
                // 定位成功事件
                var address = '';
                address += e.addressComponent.province;
                address += e.addressComponent.city;
                address += e.addressComponent.district;
                address += e.addressComponent.street;
                address += e.addressComponent.streetNumber;
                alert("当前定位地址为：" + address);
            });
            geolocationControl.addEventListener("locationError",function(e){
                // 定位失败事件
                alert(e.message);
            });
            map.addControl(geolocationControl);

            var sContentTemplate =
                    '<div style="text-align: center">'+
                        '<img src="{{userPic}}" />'+
                        '<p><a href="#">{{name}}</a></p>' +
                        '<p>{{identity}}</p>'+
                        '<p>{{description}}</p>'+
                        '<p>{{cellphone}}</p>'+
                        '<p>最后一次登录于：{{lastLoginTime.split("T")[0]}}</p>'+
                        '<p><a href="#{{id}}">收藏TA</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#{{cellphone}}">联系TA</a></p>'+
                        '</div>'
                ;
            var render = template.compile(sContentTemplate);

            //通过用户数据，生成到地图
            $.ajax({
                url:window.apiHost+'getAllUsers',
                type:'get',
                success:function(data){
                    if(data.status==1){
                        var mapUsers=data.data;
                        var pointArr = [];

                        for(var i=0;i<mapUsers.length;i++){
                            var mapUser=mapUsers[i];
                            var point = new BMap.Point(mapUser.Lng, mapUser.Lat);
                            var sContent = render(mapUser);
                            pointArr.push(point);
                            addUserToMap(map,mapUser.Lng,mapUser.Lat,sContent);
                        }
                    }else{
                        J.Router.goTo('#login_section');
                    }
                }
            });


            function addUserToMap(map,Lng,Lat,sContent){
                //经度 Longitude 简写Lng纬度 Latitude 简写Lat
                var point = new BMap.Point(Lng, Lat);
                var marker = new BMap.Marker(point);
                var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
                //map.centerAndZoom(point, 15);
                map.addOverlay(marker);
                marker.addEventListener("click", function(){
                    this.openInfoWindow(infoWindow);
                    //图片加载完毕重绘infowindow
                    $('img')[0].onload = function (){
                        infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
                    }
                });
            }
            //nav
            $('.navBtn').click(function(){
                $('.mask').show();
                $('.navBar').animate({left:0},200);

                return false;
            });
            $('.mask').click(function(){
                $('.mask').hide();
                $('.navBar').animate({left:-$('.navBar').width()-50},200);
                return false;
            });

            $('.userPicImg').click(function(){
                //获取图片
                signals.getPicture.add(function(imgSrc){
                    $('.userPicImg').attr('src',imgSrc);
                });
                window.parent.postMessage(require('components/cordova/camera/getPicture'),'*');
                return false;
            });
        }
    });
});