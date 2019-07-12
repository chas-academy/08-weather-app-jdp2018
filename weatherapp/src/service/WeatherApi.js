const API_KEY = "074fb68cdf996582973f45586d848359";
const API_URL = "https://api.openweathermap.org/data/2.5/";
const UNIT_F = "&units=imperial";
const UNIT_C = "&units=metric";

const getQuery = (city, country ) => `q=${city},${country}`;

const getQueryLocation = ({ coords }) =>
  `lat=${coords.latitude}&lon=${coords.longitude}`;

const getWeather = (path) => {
  return (query, unit) =>
    fetch(`${API_URL}${path}?${query}&appid=${API_KEY}${unit}&?`)
    .then(response => {
        if (response.status !== 200) {
            throw new Error("Got response: " + response.status)
        } else {
            console.log(response)
            return response.json();
        }
    })
    .catch(error => console.error(error));
};

export default {
  getWeather: getWeather("weather"),
  getForeCast: getWeather("forecast"),
  getQuery: getQuery,
  getQueryLocation: getQueryLocation,
  celcius: UNIT_C,
  fahrenheit: UNIT_F
};
