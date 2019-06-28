import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";
import styled from "styled-components";
import background from "./assets/bg.jpg";

const BackgroundImg = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 965px;
`;

const API_KEY = "074fb68cdf996582973f45586d848359";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=se`
    );
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter something bitch boy"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <BackgroundImg>
          <Titles />

          <Form getWeather={this.getWeather} />
          <WeatherData
            country={this.state.country}
            city={this.state.city}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </BackgroundImg>
      </React.Fragment>
    );
  }
}
export default App;
