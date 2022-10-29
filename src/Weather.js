import React, {useState} from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo"
import axios from "axios";

export default function Weather(props) {
  
    const [weather, setWeather] = useState({ready:false});
    const [city, changeCity] = useState(props.defaultCity);
    function handleResponse(response) {
      
        setWeather(
            { ready: true,
                temperature: response.data.temperature.current,
                wind: response.data.wind.speed,
                humidity: response.data.temperature.humidity,
                city: response.data.city,
                description: response.data.condition.description,
                date: new Date (response.data.time *1000),
                icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            });
        
    }

    function search() {
        let apiKey = "bd658348te0of9c0903ae4ef3803fa8a";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse)

    }
    //search for a city 
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
function handleCityChange(event) {
    ///create a new state city, changeCity

    changeCity(event.target.value);
    

}


    if (weather.ready) {
        return  (
            <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"
                    onChange ={handleCityChange}/>
                    </div>
                    <div className="col-3"> 
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                    </div>
                </form>
                
         <WeatherInfo data={weather}/>
            
            </div>
            )
} else {
   search();
    return "Loading..."

}
   

}