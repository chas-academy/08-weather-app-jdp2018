import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";
import GeoLocation from "./service/GeoLocation";
import api from "./service/WeatherApi";
import Forecast from "./components/Forecast";
import { async } from "q";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    days: [],
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
  getWeatherForm = async e => {
  e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (!city || !country) {
      this.resetState("You need to enter something bitch boy");
      return;
    }
    
    this.getWeather(api.getQuery(city, country))
  }
  getWeatherPos = async pos => {
      if(!pos ) {
        this.resetState("could not find bitches")
      }
      this.getWeather(api.getQueryLocation(pos))
  }

  getWeather = async (query) => {


    api.getWeather(
        query
      )
      .then(data => this.updateWeather(data))
      .catch(error => {
        console.log(error);
        this.resetState(error);
      });
      api.getForeCast(
       query
      )
      .then(data => { this.setState({
        days: data.list
      }
      )
    console.log(this.state)})
  };


  render() {
    return (
      <div>
        {GeoLocation.getLocation(pos=> this.getWeatherPos(pos)) }
        <Titles />
        <Form getWeather={this.getWeatherForm} />
        <WeatherData
          country={this.state.country}
          city={this.state.city}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          location={this.state.coords}
          error={this.state.error}
        />
        <Forecast days = {this.state.days}/>
        
      </div>
    );
  }
}

export default App;
