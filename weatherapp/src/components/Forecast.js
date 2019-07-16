import React, { Component } from "react";
import WeatherData from "./WeatherData";

export class Forecast extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headerW">
          <p>Todays weather</p>
        </div>
        <div>
          {this.props.days.map(data => (
            <WeatherData
              key={data.dt_txt}
              //country={data.country}
              //city={data.name}
              //temperature={data.main.temp}
              //description={data.weather[0].description}
              //humidity={data.main.humidity}
              error={data.coords}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Forecast;
