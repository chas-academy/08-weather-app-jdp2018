import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";
import GeoLocation from "./service/GeoLocation";
import api from "./service/WeatherApi";
import Forecast from "./components/Forecast";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    days: [],
    unit: api.celcius,
    query: "",
    error: undefined
  };

  resetState = error => {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      location: undefined,
      days: [],
      error: error
    });
  };

  updateWeather = data => {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      location: data.coords,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      lat: data.coords,
      error: ""
    });
  };

  updateForecast = data => {
    if (!data || !data.list) {
      return;
    }

    this.setState({
      days: data.list
    });
  };

  getWeatherForm = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (!city || !country) {
      this.resetState("You need to enter something");
      return;
    }

    this.getWeather(api.getQuery(city, country));
  };

  getWeatherPos = pos => {
    if (!pos) {
      this.resetState("You either pressed no or we couldn't find you :(");
    } else {
      this.getWeather(api.getQueryLocation(pos));
    }
  };

  getWeather = (query, unit) => {
    unit = unit || this.state.unit;
    api
      .getWeather(query, unit)
      .then(data => this.updateWeather(data))
      .catch(error => this.resetState("Error"));

    api
      .getForeCast(query, unit)
      .then(data => this.updateForecast(data))
      .catch(error => this.resetState("Error"));

    this.setState({ query: query, unit: unit });
  };

  toggleUnit = () => {
    const currentUnit = this.state.unit;
    const newUnit = currentUnit === api.celcius ? api.fahrenheit : api.celcius;
    const currentQuery = this.state.query;
    if (currentQuery !== "") {
      this.getWeather(currentQuery, newUnit);
    }
  };

  getUnit = () => this.state.unit === api.celcius ? "C" : "F";

  render() {
    return (
      <React.Fragment>
        <Titles />
        <Form getWeather={this.getWeatherForm} />
        <button className="btn2" onClick={(unit) => this.toggleUnit()}>
          C-F
        </button>
        <div>
          <WeatherData
            country={this.state.country}
            city={this.state.city}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            description={this.state.description}
            location={this.state.coords}
            error={this.state.error}
            unit= {this.getUnit()}
          />
          <div className="week">
            <Forecast days={this.state.days} unit={this.getUnit()}/>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    GeoLocation.getLocation(pos => this.getWeatherPos(pos), (error) => this.resetState("Could not access your location"));
  }
}

export default App;
