const apiKey = "259f9713f30b1cdeaf77336c53b02579";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const img = document.querySelector(".weather img");
async function weather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  if (response.status == 404) {
  } else {
    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clear") {
      img.src = "./images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
      img.src = "./images/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      img.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "Rain") {
      img.src = "./images/rain.png";
    }else if (data.weather[0].main === "Snow") {
      img.src = "./images/snow.png";
    }else{
      img.src = "./images/mist.png";

    }
    
  }
  searchBox.value = "";
}

searchBtn.addEventListener("click", () => {
  weather(searchBox.value);
});
