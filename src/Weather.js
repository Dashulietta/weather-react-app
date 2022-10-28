import React, {useState} from "react";
import "./Weather.css";
import FormattedDate from "./FormatedDate";
import axios from "axios";

export default function Weather() {
    const [ready, setReady]= useState(false);
    const [weather, setWeather] = useState(null);
    function handleResponse(response) {
      
        setWeather(
            { temperature: response.data.temperature.current,
                wind: response.data.wind.speed,
                humidity: response.data.temperature.humidity,
                city: response.data.city,
                description: response.data.condition.description,
                date: new Date (response.data.time *1000),
                icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            });
        setReady(true);
    }
    if (ready) {
        return  (
            <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3"> 
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                    </div>
                </form>
                
            <h1>{weather.city}</h1>
            <ul>
                <li><FormattedDate date={weather.date}/> </li>
                <li className="text-capitalize">{weather.description}</li>
            </ul>
            <div className="row mt-3">
            
                <div className="col-6">
                    <div className="d-flex">
                    <img src={weather.icon} alt={weather.description} className="float-left" />
                    <div className="float-left">
                   <span className="temperature"> {Math.round(weather.temperature)}</span>
                   <span className="unit">°C</span>
                   </div>
                   </div>
                </div>
                <div className="col-6">
                    <ul>
                        
                        <li>Humidity: {weather.humidity}%</li>
                        <li>Wind: {Math.round(weather.wind)} km/h</li>
                    </ul>
                </div>
            </div>
            
            </div>
            )
} else {
    let apiKey = "bd658348te0of9c0903ae4ef3803fa8a";
    let city = "Kyiv";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse)
    return "Loading..."

}
   

}