import React from "react";



class WeatherData extends React.Component {
    render(){
        return (
            <div>
                
                { this.props.city && this.props.country && <p> Plats: { this.props.country }, { this.props.city }</p>}
                { this.props.temperature && <p>Temperatur: { this.props.temperature }°C</p>}
                { this.props.humidity && <p>Fuktighet: { this.props.humidity }%</p>}
                {this.props.description && <p>Tillstånd: { this.props.description }</p> }
                { this.props.error && <p>{this.props.error}</p>}
              
            </div>
        );

    }

}
export default WeatherData; 