const gettemp = document.getElementsByClassName("Temperature");
const gethum = document.getElementsByClassName("Humidity");
const getwe = document.getElementsByClassName("Weather");
const wind_sp = document.getElementsByClassName("Wind_speed");
const btnn = document.querySelector(".getstartbtn");
let newcity = document.querySelector(".changecity");
const cityInput = document.getElementById("cityInput");  

const url = `https://weatherly1.p.rapidapi.com/weather?city=`;

const options = {
  method: 'GET',
  headers: {
	'x-rapidapi-key': '65e253a613msh458106d64c94015p12b4d1jsn8ea3c2533296',
	'x-rapidapi-host': 'weatherly1.p.rapidapi.com'
  }
};

async function getWeather(city) {
  try {
	const response = await fetch(url + city, options);
	const data = await response.json();

	
	console.log(data);

	const humidity = data.humidity || "N/A";
	const temperature = data.temperature || "N/A";
	const weather = data.weather || "N/A";
	const wind_speed = data.wind_speed || "N/A";

	if (gethum.length > 0) gethum[0].innerText = `${humidity}%`;
	if (gettemp.length > 0) gettemp[0].innerText = `${temperature} Kelvin`;
	if (getwe.length > 0) getwe[0].innerText = `Weather: ${weather}`;
	if (wind_sp.length > 0) wind_sp[0].innerText = `NNW ${wind_speed} mph`;
	newcity.innerText = `Weather for ${city}`;
  } catch (error) {
	console.error("Error fetching weather data:", error);
  }
}

btnn.addEventListener("click", (event) => {
  event.preventDefault();
  const city = cityInput.value;  
  if (city) {
	getWeather(city);  
  } else {
	alert("Please enter a city name.");
  }
});






const toggleBackgroundButton = document.getElementById("toggleBackgroundButton");

toggleBackgroundButton.addEventListener("click", () => {
  const currentBackground = document.body.style.backgroundImage;

  if (currentBackground && currentBackground !== "none") {
    document.body.style.backgroundImage = "none";
    toggleBackgroundButton.textContent = "visiblity mode";
  } else {
    document.body.style.backgroundImage = "url('/assets/3324647.jpg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center"; 
	document.body.style.backgroundRepeat = "no-repeat";
    toggleBackgroundButton.textContent = "visiblity mode";
  }
});

