$(function(){
    $('#offline').hide();
    $('#online').show().html('baidu map:').append('<div id="userMap" class="userMap"></div>');
})();

function remoteCallback(position){

    window.BMap_loadScriptTime = (new Date).getTime();
    $.getScript('http://api.map.baidu.com/getscript?v=2.0&ak=XoGIq1S4vnlzaTVuTQZsHSPi&services=&t=20150525152504',function(){
        //alert('load script success!');
        // 百度地图API功能
        	var map = new BMap.Map("userMap");
        	map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
        	map.enableScrollWheelZoom(true);

        	// 用经纬度设置地图中心点
        	map.clearOverlays();
			var new_point = new BMap.Point(position.coords.longitude,position.coords.latitude);
			var marker = new BMap.Marker(new_point);  // 创建标注
			map.addOverlay(marker);              // 将标注添加到地图中
			map.panTo(new_point);
		 //alert('Latitude: '          + position.coords.latitude          + '\n' +
          //        'Longitude: '         + position.coords.longitude         + '\n' +
          //        'Altitude: '          + position.coords.altitude          + '\n' +
          //        'Accuracy: '          + position.coords.accuracy          + '\n' +
          //        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          //        'Heading: '           + position.coords.heading           + '\n' +
          //        'Speed: '             + position.coords.speed             + '\n' +
          //        'Timestamp: '         + position.timestamp                + '\n');
    });
    
}
