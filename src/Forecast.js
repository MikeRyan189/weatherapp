import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




function Forecast() {

    const { city } = useParams()

  const [data, setData] = useState({})

  const days = data.list

  const key = process.env.REACT_APP_API_KEY
  
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${key}`
    useEffect(()=>{
        axios.get(api).then((res) => {
            setData(res.data)
            console.log(res.data)
            
          })
    },[api])
    
  return (
    <div id='foreCast'>
        {days ? days.map((day) =>(
        <div id="hour">
           <div id='topBar'>
            <p id ='castDate'>{day.dt_txt}</p>
            <p id='castTemp'>{day.main.temp.toFixed()}°F</p>
            </div>
            <div id='castBar'>
            <p>{day.main.humidity}% Humidity</p>
            <p>{day.weather[0].description}</p>
            <p>{day.wind.speed} MPH</p>
            </div>
        </div>     
        )) : null}   
    </div>
  );
}

export default Forecast;