const search = document.querySelector('#city');
const button = document.querySelector('button');
//const textH1  = document.getElementById('.cityName');
const countryName = document.querySelector('#countryName');
const cityName = document.querySelector('#cityName');
const Temperature = document.querySelector('#Temperature');
const Sunrise = document.querySelector('#Sunrise');
const Sunset = document.querySelector('#Sunset');
const Humidity = document.querySelector('#Humidity');
const Wind = document.querySelector('#Wind');
const Pressure = document.querySelector('#Pressure');
const cwtype = document.querySelector('#cwtype');
const outername = document.querySelector('.outername');
const outertemp = document.querySelector('.outertemp');


async function searchPlace(){
    let searchValue = search.value
    
   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchValue+'&appid=e7aaefe4ac0a588533b0acb7de5ef903', {mode: 'cors'});
   const placeData = await response.json();
   //console.log(placeData);
   //img.src = gifData.data.images.original.url;   

   const icon = placeData.weather[0].icon;
   document.querySelector("#icon").src ="https://openweathermap.org/img/wn/" + icon + "@2x.png";


   let name  = placeData.name;
   //let icon = placeData.weather[0].icon;
   let main = placeData.weather[0].main;
   let description = placeData.weather[0].description;
   let feelslike = placeData.main.feels_like;
   let humidity = placeData.main.humidity;
   let pressure = placeData.main.pressure;
   let temp = placeData.main.temp;
   let temp_max = placeData.main.temp_max;
   let temp_min = placeData.main.temp_min;
   let country = placeData.sys.country;
   let sunrise = placeData.sys.sunrise;
   let sunset = placeData.sys.sunset;
   let wind = placeData.wind.speed;

   countryName.textContent = country ;
   cityName.textContent = name ;
   outername.textContent = name + ",    " +main;
   cwtype.textContent = main ;
   Temperature.textContent = parseFloat(temp - 274.15).toFixed(2) +' °C' ;
   outertemp.textContent = parseFloat(temp - 274.15).toFixed(2) +' °C' ;
   Sunrise.textContent = new Date(sunrise*1000) ;
   Sunset.textContent = new Date(sunset*1000) ;
   Humidity.textContent = humidity +' %' ;
   Wind.textContent = wind +' k/h';
   Pressure.textContent = pressure +' bar';

   let unix = sunrise;
   let date = new Date(unix*1000);

    console.log(date); 


   console.log(name);
   console.log(icon);
   console.log(feelslike);
   console.log(main);
   console.log(description);
   console.log(humidity);
   console.log(pressure);
   console.log(temp);
   console.log(temp_max);
   console.log(temp_min);
   console.log(country);
   console.log(sunrise);
   console.log(sunset);
   console.log(wind);
   //document.getElementById("city").innerHTML = placeData.name;
   
   
   //const myJSON = JSON.stringify(placeData.weather[0].icon);
   //console.log(myJSON);   
}
searchPlace();