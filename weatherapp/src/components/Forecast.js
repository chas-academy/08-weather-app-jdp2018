import React, { Component } from 'react'
import WeatherData from "./WeatherData";

export class Forecast extends Component {
    render() {
        return (
            <div>
                {this.props.days.map(d =>
                    <WeatherData
                    key={d.dt_txt}
                    country={d.main.temp}
                    city={d.name}
                    temperature={d.sys.country}
                    humidity={d.coords}
                    description={d.main.humidity}
                    location={d.weather[0].description}
                    error={d.coords}
                  />
                )}
            </div>
        )
    }
}

export default Forecast
