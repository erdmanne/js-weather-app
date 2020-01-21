//get the API from openweathermap & with console.log checking if data is loaded
jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=0595215f568d90110031d71a7b16a440",
function(data){
  console.log(data);

//now get the default icons which openweathermap is giving me displayed - created therefore in the indey.html the class for it

  var icon = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp); //get the temperatur displayed like the icon
  var weather = data.weather[0].main // get the weather with words displayed
  jQuery(".icon").attr('src', icon);
  jQuery(".temp").append(temp);
  jQuery(".weather").append(weather);
});
