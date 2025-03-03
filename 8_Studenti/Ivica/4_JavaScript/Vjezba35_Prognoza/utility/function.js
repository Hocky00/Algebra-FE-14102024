import { API_KEY } from "./constants.js";

export function getCurrentLocation() {
  const position = {
    lat: null,
    lon: null,
  };

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        position.lat = success.coords.latitude;
        position.lon = success.coords.longitude;
        resolve(position);
      },
      (fail) => {
        resolve(position);
      }
    );
  });
}

export async function getCityLatLon(cityName){

try {

const response = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
const data = await response.json();


} catch(error) {
alert("City not found");
}

}








function getLocationFromLocalStorage(){
const position = {
  lat: null;
  lon: null;
  city: null;
};

position.lat = localStorage.getItem("latitude");
position.getLocationFromLocalStorage = localStorage.getItem("longitude");
position.city = localStorage.getItem("city");

return position;
}