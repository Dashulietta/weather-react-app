import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
    const [ready, setReady]= useState(false);
    const [weather, setWeather] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setWeather(
            { temperature: response.data.temperature.current,
                wind: response.data.wind.speed,
                humidity: response.data.temperature.humidity,
                city: response.data.city,
                description: response.data.condition.description,
                date: "Friday 13:06",
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
                    <input type="search" placeholder="Enter a city" className="form-control"/>
                    </div>
                    <div className="col-3"> 
                    <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                    </div>
                </form>
                
            <h1>{weather.city}</h1>
            <ul>
                <li>{weather.date}</li>
                <li className="text-capitalize">{weather.description}</li>
            </ul>
            <div className="row">
            
                <div className="col-6">
                    <img src={weather.icon} alt={weather.description} />
                    {Math.round(weather.temperature)}°C
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