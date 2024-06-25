const apiKey = "c153479685c47f1b34a83591f3b1acbe";
const cityCoords = {
  abbottabad: { lat: 34.1688, lon: 73.2215 },
  bahawalpur: { lat: 29.3956, lon: 71.6836 },
  dera_ghazi_khan: { lat: 30.0515, lon: 70.6348 },
  faisalabad: { lat: 31.4504, lon: 73.1350 },
  gujranwala: { lat: 32.1877, lon: 74.1945 },
  gujrat: { lat: 32.5742, lon: 74.0780 },
  hyderabad: { lat: 25.3960, lon: 68.3578 },
  islamabad: { lat: 33.6844, lon: 73.0479 },
  jhang: { lat: 31.2681, lon: 72.3171 },
  karachi: { lat: 24.8607, lon: 67.0011 },
  kasur: { lat: 31.1168, lon: 74.4500 },
  khuzdar: { lat: 27.8113, lon: 66.6104 },
  lahore: { lat: 31.5497, lon: 74.3436 },
  larkana: { lat: 27.5618, lon: 68.2106 },
  mardan: { lat: 34.1988, lon: 72.0400 },
  mirpurkhas: { lat: 25.5276, lon: 69.0158 },
  multan: { lat: 30.1575, lon: 71.5249 },
  nawabshah: { lat: 26.2483, lon: 68.4096 },
  okara: { lat: 30.8081, lon: 73.4458 },
  peshawar: { lat: 34.0151, lon: 71.5249 },
  quetta: { lat: 30.1798, lon: 66.9750 },
  rawalpindi: { lat: 33.5651, lon: 73.0169 },
  sargodha: { lat: 32.0836, lon: 72.6711 },
  sheikhupura: { lat: 31.7131, lon: 73.9783 },
  sialkot: { lat: 32.4927, lon: 74.5317 },
  sukkur: { lat: 27.7244, lon: 68.8228 },
  vehari: { lat: 30.0410, lon: 72.3527 },
  murree: { lat: 33.9070, lon: 73.3943 }
};

document.getElementById("citySelect").addEventListener("change", ()=>{
  const city = document.getElementById("citySelect").value;
  const { lat, lon } = cityCoords[city];
  fetchWeatherData(lat, lon, city);
})

function fetchWeatherData(lat, lon, city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("temperature").innerText = `${Math.floor(data.main.temp)}°C`;
      document.getElementById("cityName").innerText = city.charAt(0).toUpperCase() + city.slice(1);
      document.getElementById("humidity").innerText = `${data.main.humidity} %`;
      document.getElementById("wind").innerText = `${data.wind.speed} `;
      document.getElementById("feelslike").innerText = `${Math.floor(data.main.feels_like)} °C`;
      if(Math.floor(data.main.temp)>30){
        document.getElementById("condition").innerText = "HOT";
      }else if(Math.floor(data.main.temp)>40){
        document.getElementById("condition").innerText = "Heat wave Alert";
      }else if(Math.floor(data.main.temp)<30){
        document.getElementById("condition").innerText = "Average";
      }else if(Math.floor(data.main.temp)<=10){
        document.getElementById("condition").innerText = "Cold";
      }
    });
}
fetchWeatherData(cityCoords.karachi.lat, cityCoords.karachi.lon, "karachi");