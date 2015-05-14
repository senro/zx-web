(function() {
    document.addEventListener("deviceready", function () {
        //var app = new kendo.mobile.Application(document.body, { skin: "flat" });
        navigator.splashscreen.hide();
        var PORTS={
            domain:'http://localhost:3000',
            router:{
                '注册':'/reg'
            }
        };
        //注册
        $('.regSubmit').click(function(){
            var cellphone=$('.regInput-cellphone').val(),
                password=$('.regInput-password').val();
            $.getJSON(PORTS.domain+PORTS.router['注册']+'?jsoncallback=?',{cellphone:cellphone,password:password},function(data){
                if(data.code==1){
                    alert('注册成功！');
                }
            });
            return false;
        });
        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
        var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
            // 百度地图API功能
        	var map = new BMap.Map("allmap");
        	map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
        	map.enableScrollWheelZoom(true);
        	
        	// 用经纬度设置地图中心点
        	map.clearOverlays(); 
			var new_point = new BMap.Point(position.coords.longitude,position.coords.latitude);
			var marker = new BMap.Marker(new_point);  // 创建标注
			map.addOverlay(marker);              // 将标注添加到地图中
			map.panTo(new_point);   
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
}());