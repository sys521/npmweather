#!/usr/bin/env node
var axios= require('axios')
var local={};
if(process.argv[2]){
    local.params={
        city:process.argv[2]
    }
}
axios.get('http://jirenguapi.applinzi.com/weather.php',local).then(function(response){
    var a=response.data.results[0]
    console.log(a.currentCity)
    console.log(a.weather_data[0].weather)
    console.log(a.weather_data[0].wind)
    console.log(a.weather_data[0].temperature)
}).catch(function(){
    console.log('something Error')
})