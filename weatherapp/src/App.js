import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";



const API_KEY = "074fb68cdf996582973f45586d848359";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined   
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=se`)
        const data = await api_call.json();
        
        
        if (city && country ) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
    
            })
        }else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "please enter something bitch boy"
    
            })
        }

    }

    render() {
        return(
         <div>
             <Titles />
             <Form  getWeather={this.getWeather}/>
             <WeatherData 
                country={this.state.country}
                city={this.state.city}
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
             />
         </div>
        )
        
    }
}
export default App;
