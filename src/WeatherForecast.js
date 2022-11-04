import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {
    const [forecastLoaded, setLoadedForecast] = useState(false);
    const [forecastData, setForecastData] = useState(null);
    
    useEffect(() => {
        setLoadedForecast(false);
    }, [props.cityForecast] );


    function showForecast(response) {
        console.log(response.data);
        setForecastData(response.data.daily)
        setLoadedForecast(true);
    }
    console.log(props);
  
   if (forecastLoaded) {
console.log(forecastData);
return (
    <div className="WeatherForecast">
    <div className="row">
        <div className="col">
        <WeatherForecastDay data ={forecastData[0]}/>
        </div>
        <div className="col">
        <WeatherForecastDay data ={forecastData[1]}/>
        </div>
        <div className="col">
        <WeatherForecastDay data ={forecastData[2]}/>
        </div>
        <div className="col">
        <WeatherForecastDay data ={forecastData[3]}/>
        </div>
        <div className="col">
        <WeatherForecastDay data ={forecastData[4]}/>
        </div>
    </div>
</div> );      

   } else {
    let apiKey = `bd658348te0of9c0903ae4ef3803fa8a`;
    let city = props.cityForecast;
   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(showForecast); 
   return (null);


   }
   
   
}