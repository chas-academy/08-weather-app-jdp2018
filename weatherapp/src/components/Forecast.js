import React, { Component } from "react";
import WeatherData from "./WeatherData";

export class Forecast extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headerW">
          <p>Forecast</p>
        </div>
        <div className="forecast">
          {this.props.days.slice(0,5).map(data => (
            <WeatherData
              key={data.dt}
              //country={data.country}
              //city={data.name}
              temperature={data.main.temp}
              description={data.weather[0].description}
              humidity={data.main.humidity}
              error={data.coords}
              title = {data.dt_txt.substring(0, 10)}
              unit = {this.props.unit}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Forecast;
