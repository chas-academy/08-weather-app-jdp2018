import React from 'react';
import styled from 'styled-components';

const Body = styled.div `
text-align: center;
color: #fff;
`

class WeatherData extends React.Component {
    render(){
        return (
            <div>
                <Body>
                { this.props.city && this.props.country && <p> Plats: { this.props.country }, { this.props.city }</p>}
                { this.props.temperature && <p>Temperatur: { this.props.temperature }°C</p>}
                { this.props.humidity && <p>Fuktighet: { this.props.humidity }%</p>}
                {this.props.description && <p>Tillstånd: { this.props.description }</p> }
                { this.props.error && <p>{this.props.error}</p>}
                </Body>
            </div>
        );

    }

}
export default WeatherData; 