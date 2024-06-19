let API_key="cf96c38abe317868b78061d37465af6b";
let wind_speed,temp,clouds,humidity,country_code,city;
let bool=false;
async function  getdata(){
    // let city_name='ghaziabad';
   const city_name= document.querySelector('#search-city').value.trim();
   console.log("cute"+city_name+"hii")
   if (city_name === '') {
    console.log('Please enter a city name');
    return; // Exit function if input is empty
}
console.log("cute"+city_name+"hii")
     city= 'ghaziabad'
    const url= await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    const data=await url.json();
console.log("weather data-> ", data);
//fetching data
    clouds=data.clouds.all;
    country_code=data['sys']['country']
    temp = data['main']['temp']
    humidity = data['main']['humidity']
    wind_speed = data['wind']['speed']
    applydata();
}
async function applydata(){
    document.querySelector('.speed').innerText=`${wind_speed}m/s `;
    document.querySelector('.cloudy-percent').innerText=`${clouds}%`;
    document.querySelector('.humid-percent').innerText=`${humidity}%`;
    document.querySelector('.temp-display').innerText=`${temp}°`;
   const flag= document.querySelector('#flag-img');
   flag.src=`https://flagsapi.com/${country_code}/flat/32.png`
}
const hideSearchTab = () => {
    if (bool === false) {
        document.getElementById("tab2").classList.add('hide-tab');
        document.getElementById("tab1").classList.remove('hide-tab');
        bool = true;
    }
}

const hideCurrentTab = () => {
    if (bool === true) {
        document.getElementById("tab1").classList.add('hide-tab');
        document.getElementById("tab2").classList.remove('hide-tab');
        bool = false;
    }
}
document.getElementsByClassName('current-weather-tab')[0].addEventListener('click', hideSearchTab);
document.getElementById('tab2').addEventListener('click', hideCurrentTab);
getdata();