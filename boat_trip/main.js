var latitude = "33.69";
var longitude = "-117.83";
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 38.95, lng: -94.63 },
    zoom: 4
  });
  map.addListener("click", function (e) {
    console.log('e ', e);
    //lat and lng is available in e object
    latitude = e.latLng.lat();
    longitude = e.latLng.lng();
    console.log('lat', latitude);
    console.log('long', longitude)
    // url seperate then query string ?
    // rewrite with jquery.ajax getJSON is shorthand
    // .param() is another way to do query string.
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=e9ca034e50ecf7c0b99d25a7290a0a56" +
      "&units=imperial&lat=" + latitude.toFixed(1) + "&lon=" + longitude.toFixed(1), function (data) {
        console.log('data :', data);
        var weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $('.weatherIcon').attr('src', weatherIcon);
        var weatherTemp = Math.round(data.main.temp);
        $('.weatherTemp').text(weatherTemp + " F");
        var weatherDescription = data.weather[0].main;
        $('.weatherDescription').text(weatherDescription);
        var location = data.name;
        $('.location').text(location);
        var windSpeed = data.wind.speed;
        $('.windSpeed').text("Wind Speed : " + windSpeed.toFixed(0) + " mph");
        var windDirection = data.wind.deg;
        $('.windDirection').text("Wind Direction : "
          + windDirection.toFixed(0) + " degrees");

      });
  });
}
// var lat = "33.69";
// var lon = "-117.83";
// $.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=e9ca034e50ecf7c0b99d25a7290a0a56"+
//    "&units=imperial&lat="+latitude+"&lon="+longitude, function(data){
//     console.log('data :', data);
//     var weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon +".png";
//     $('.weatherIcon'). attr('src', weatherIcon);
//     var weatherTemp = Math.round(data.main.temp);
//     $('.weatherTemp').text(weatherTemp+" F");
//     var weatherDescription = data.weather[0].main;
//     $('.weatherDescription').text(weatherDescription);
// });
