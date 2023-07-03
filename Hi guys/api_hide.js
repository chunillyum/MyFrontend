var weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
};

// 날씨 api - 서울
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=37.517235&lon=127.047325&appid=adca84129bdf7f7358aa0a533d29a37b"
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $Icon = (resp.weather[0].icon).substr(0,2);
        var $weather_description = resp.weather[0].main;
        var $Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $city = '서울';
        var $cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.weather_icon').append('<i class="' + weatherIcon[$Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.weather_description').prepend($weather_description);
        $('.current_temp').prepend($Temp);
        $('.humidity').prepend($humidity);
        $('.wind').prepend($wind);
        $('.city').append($city);
        $('.cloud').append($cloud);
        $('.temp_min').append($temp_min);
        $('.temp_max').append($temp_max);
    }
}) 


// 날씨 api - 경기도
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=37.567167&lon=127.190292&appid=adca84129bdf7f7358aa0a533d29a37b";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $g_Icon = (resp.weather[0].icon).substr(0,2);
        var $g_weather_description = resp.weather[0].main;
        var $g_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $g_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $g_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $g_city = '경기도';
        var $g_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $g_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $g_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.g_weather_icon').append('<i class="' + weatherIcon[$g_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.g_weather_description').prepend($g_weather_description);
        $('.g_current_temp').prepend($g_Temp);
        $('.g_humidity').prepend($g_humidity);
        $('.g_wind').prepend($g_wind);
        $('.g_city').append($g_city);
        $('.g_cloud').append($g_cloud);
        $('.g_temp_min').append($g_temp_min);
        $('.g_temp_max').append($g_temp_max);   
    }
})
//강원도
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=37.555837&lon=128.209315&appid=adca84129bdf7f7358aa0a533d29a37b";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $an_Icon = (resp.weather[0].icon).substr(0,2);
        var $an_weather_description = resp.weather[0].main;
        var $an_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $an_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $an_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $an_city = '강원도';
        var $an_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $an_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $an_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.an_weather_icon').append('<i class="' + weatherIcon[$an_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.an_weather_description').prepend($an_weather_description);
        $('.an_current_temp').prepend($an_Temp);
        $('.an_humidity').prepend($an_humidity);
        $('.an_wind').prepend($an_wind);
        $('.an_city').append($an_city);
        $('.an_cloud').append($an_cloud);
        $('.an_temp_min').append($an_temp_min);
        $('.an_temp_max').append($an_temp_max);   
    }
})

//인천
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=37.4562557&lon=126.7052062&appid=adca84129bdf7f7358aa0a533d29a37b";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $in_Icon = (resp.weather[0].icon).substr(0,2);
        var $in_weather_description = resp.weather[0].main;
        var $in_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $in_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $in_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $in_city = '인천';
        var $in_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $in_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $in_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.in_weather_icon').append('<i class="' + weatherIcon[$in_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.in_weather_description').prepend($in_weather_description);
        $('.in_current_temp').prepend($in_Temp);
        $('.in_humidity').prepend($in_humidity);
        $('.in_wind').prepend($in_wind);
        $('.in_city').append($in_city);
        $('.in_cloud').append($in_cloud);
        $('.in_temp_min').append($in_temp_min);
        $('.in_temp_max').append($in_temp_max);   
    }
})

//부산
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=35.1795543&lon=129.07564160000004&appid=adca84129bdf7f7358aa0a533d29a37b";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $bu_Icon = (resp.weather[0].icon).substr(0,2);
        var $bu_weather_description = resp.weather[0].main;
        var $bu_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $bu_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $bu_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $bu_city = '부산';
        var $bu_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $bu_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $bu_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.bu_weather_icon').append('<i class="' + weatherIcon[$bu_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.bu_weather_description').prepend($bu_weather_description);
        $('.bu_current_temp').prepend($bu_Temp);
        $('.bu_humidity').prepend($bu_humidity);
        $('.bu_wind').prepend($bu_wind);
        $('.bu_city').append($bu_city);
        $('.bu_cloud').append($bu_cloud);
        $('.bu_temp_min').append($bu_temp_min);
        $('.bu_temp_max').append($bu_temp_max);   
    }
})

//전라도
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=34.8679&lon=126.991&appid=adca84129bdf7f7358aa0a533d29a37b";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $jeon_Icon = (resp.weather[0].icon).substr(0,2);
        var $jeon_weather_description = resp.weather[0].main;
        var $jeon_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $jeon_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $jeon_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $jeon_city = '전라도';
        var $jeon_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $jeon_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $jeon_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.jeon_weather_icon').append('<i class="' + weatherIcon[$jeon_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.jeon_weather_description').prepend($jeon_weather_description);
        $('.jeon_current_temp').prepend($jeon_Temp);
        $('.jeon_humidity').prepend($jeon_humidity);
        $('.jeon_wind').prepend($jeon_wind);
        $('.jeon_city').append($jeon_city);
        $('.jeon_cloud').append($jeon_cloud);
        $('.jeon_temp_min').append($jeon_temp_min);
        $('.jeon_temp_max').append($jeon_temp_max);   
    }
})

//충청도
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=36.5184&lon=126.8&appid=adca84129bdf7f7358aa0a533d29a37b";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $chung_Icon = (resp.weather[0].icon).substr(0,2);
        var $chung_weather_description = resp.weather[0].main;
        var $chung_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $chung_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $chung_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $chung_city = '충청도';
        var $chung_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $chung_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $chung_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.chung_weather_icon').append('<i class="' + weatherIcon[$chung_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.chung_weather_description').prepend($chung_weather_description);
        $('.chung_current_temp').prepend($chung_Temp);
        $('.chung_humidity').prepend($chung_humidity);
        $('.chung_wind').prepend($chung_wind);
        $('.chung_city').append($chung_city);
        $('.chung_cloud').append($chung_cloud);
        $('.chung_temp_min').append($chung_temp_min);
        $('.chung_temp_max').append($chung_temp_max);   
    }
})

//제주
var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat=33.499621&lon=126.531188&appid=adca84129bdf7f7358aa0a533d29a37b";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

        var $jeju_Icon = (resp.weather[0].icon).substr(0,2);
        var $jeju_weather_description = resp.weather[0].main;
        var $jeju_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
        var $jeju_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $jeju_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $jeju_city = '제주도';
        var $jeju_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $jeju_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $jeju_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        

        $('.jeju_weather_icon').append('<i class="' + weatherIcon[$jeju_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
        $('.jeju_weather_description').prepend($jeju_weather_description);
        $('.jeju_current_temp').prepend($jeju_Temp);
        $('.jeju_humidity').prepend($jeju_humidity);
        $('.jeju_wind').prepend($jeju_wind);
        $('.jeju_city').append($jeju_city);
        $('.jeju_cloud').append($jeju_cloud);
        $('.jeju_temp_min').append($jeju_temp_min);
        $('.jeju_temp_max').append($jeju_temp_max);   
    }
})
//즐겨찾기(상단 고정, 버튼으로?) 기능, 비or눈