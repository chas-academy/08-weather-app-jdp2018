const API_KEY = "074fb68cdf996582973f45586d848359";
const API_URL = "https://api.openweathermap.org/data/2.5/";
const getQuery = (city, country ) => `q=${city},${country}`;
const getQueryLocation = ({ coords }) =>
  `lat=${coords.latitude}&lon=${coords.longitude}`;

const getWeather = path => {
  return query =>
    fetch(`${API_URL}${path}?${query}&appid=${API_KEY}&units=metric&?`).then(
      response => response.json()
    );
};

export default {
  getWeather: getWeather("weather"),
  getForeCast: getWeather("forecast"),
  getQuery: getQuery,
  getQueryLocation: getQueryLocation
};
