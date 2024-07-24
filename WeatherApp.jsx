import Searchbox from "./Searchbox.jsx";
import WeatherInfo from "./WeatherInfo.jsx";
import {useState} from "react";

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({
        
            city:"Delhi",
            feelslike: 31.9,
            humidity: 79,
            pressure: 993,
            temp: 28 ,
            temp_max: 29,
            temp_min: 27,
            description: "haze"
          
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }

    return(
        <>
        <h1 style={{textAlign:"center"}}>WeatherApp by Arvind</h1>
        <Searchbox updateInfo={updateInfo}/>
        <WeatherInfo info={weatherInfo}/>
        </>
    )
}