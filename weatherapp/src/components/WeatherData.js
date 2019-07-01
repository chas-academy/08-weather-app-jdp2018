import React from 'react';
import styled from 'styled-components';


class WeatherData extends React.Component {
    render(){
        return (
            <div className="data-container">
                { this.props.city && this.props.country && <p> Location: { this.props.country }, { this.props.city }</p>}


                <div className="temperature">
                { this.props.temperature && <p>Temperature: { this.props.temperature }°C</p>}
                </div>
            



                { this.props.humidity && <p>Humidity: { this.props.humidity }%</p>}
                {this.props.description && <p>Condition: { this.props.description }</p> }
                { this.props.error && <p>{this.props.error}</p>}
            </div>
        );

    }

}
export default WeatherData; 