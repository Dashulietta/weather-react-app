import axios from "axios";
import React from "react"
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    function showForecast(response) {
        console.log(response.data);
    }
    console.log(props);
    let apiKey = `bd658348te0of9c0903ae4ef3803fa8a`;
    let city = props.cityForecast;
   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(showForecast)
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
               <div className="forecastDay"> thu </div>
               <div className="forecastIcon">  icon</div>
               <div className="forecastTemp"> <span className="forecastTempMax">19°</span> <span className="forecastTempMin">10°</span> </div>
            </div>
        </div>

    </div>       
    ) 
}