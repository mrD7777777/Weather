const btn = document.querySelector("button");
const temperature = document.querySelector(".temperature");
const city = document.querySelector("h2");
getLocation();
function getLocation() {
  navigator.geolocation.getCurrentPosition(showPosition, (err) => {
    temperature.style.fontSize = "20px";
    temperature.style.lineHeight = "36px";
    temperature.innerHTML = "Ooops. Something went wrong.";
    city.innerHTML = "Error info";
    city.style.fontSize = "12px";
    city.style.lineHeight = "15px";
    city.style.opacity = ".75";
    btn.innerHTML = "Try again";
    // btn.style.fontSize = "20px";
    // btn.style.lineHeight = "36px";
    // btn.style.color = "#4C01E0";
    // btn.style.textDecoration = "none";
    // btn.style.backgroundColor = " #FFFFFF";
    // btn.style.borderRadius = "8px";
    // btn.style.padding = "0 26px 0 26px";
  });
}
let lat;
let lon;
async function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  let data = await getPromise();
  city.innerHTML = data.name;
  temperature.innerHTML = (+data.main.temp - 273.15).toFixed(1);
}

async function getPromise() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e0337819e6ecbe01d0c48517b5527310`
  );
  let data = await response.json();
  return data;
}
function activBtn() {
  btn.style.fontSize = "20px";
  btn.style.lineHeight = "36px";
  btn.style.color = "#4C01E0";
  btn.style.textDecoration = "none";
  btn.style.backgroundColor = " #FFFFFF";
  btn.style.borderRadius = "8px";
  btn.style.padding = "0 26px 0 26px";
}
btn.addEventListener("click", activBtn);
