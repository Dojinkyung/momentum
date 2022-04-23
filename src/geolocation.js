const weather = document.querySelector("#geolocation span:first-child");
const city = document.querySelector("#geolocation span:last-child");
const API_KEY = "73e2f1eac8b1dd36590fd5e0b64fe0ef";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

navigator.geolocation.getCurrentPosition(onGeoOk);