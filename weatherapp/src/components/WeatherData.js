import React from "react";

class WeatherData extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="tdayswther">
          <div>
            {this.props.title}
            {this.props.city && this.props.country && (
              <p>
                Location: {this.props.country}, {this.props.city}
              </p>
            )}

            <div>
              {this.props.temperature && (
                <p>Temperature: {this.props.temperature} {this.props.unit}</p>
              )}
            </div>

            <div>
              {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
            </div>

            <div>
              {this.props.description && (
                <p>Condition: {this.props.description}</p>
              )}
            </div>

            <div>
              {this.props.location && <p>location: {this.props.location}</p>}
            </div>

            {this.props.error && <p>{this.props.error}</p>}
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default WeatherData;
