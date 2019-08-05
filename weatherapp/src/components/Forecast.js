import React, { Component } from "react";
import WeatherData from "./WeatherData";

export class Forecast extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headerW">
          <p> Five days Forecast with three hours interval</p>
        </div>
        <div className="forecast">
          {this.props.days.map(data => (
            <WeatherData
              key={data.dt}
              temperature={data.main.temp}
              description={data.weather[0].description}
              humidity={data.main.humidity}
              error={data.coords}
              title={data.dt_txt}
              unit={this.props.unit}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Forecast;
