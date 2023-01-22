import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const key = process.env.REACT_APP_API_KEY
 
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`

    const search = (event) =>{
      if (event.key === 'Enter'){
        axios.get(api).then((res) => {
          setData(res.data)
          console.log(res.data)
        })
      }
    }
  return (
    <div>
    <div className='search'>
      <input id='searchBar' type='text' placeholder='search location' value={location}
       onChange={event => setLocation(event.target.value)} onKeyDown={search}/>
    </div>
    <div className="Home">
      <h1 id='cityName'>{data.name}</h1>
      {data.main ? <p id='temp'>{data.main.temp.toFixed()}°F</p> : null}
      <div className="smallBar">
      {data.weather ? <p id='conditions'>{data.weather[0].main}</p> : null}
      {data.weather ? <p id='humidity'>{data.main.humidity}% Humidity</p> : null}
      {data.wind ? <p id='wind'>{data.wind.speed.toFixed()} MPH Winds</p> : null}
      </div>
      <Link to={`/forecast/${location}`}>
      {data.main ? <button id='button'>Forecast</button> : null}
      </Link>
    </div>
    </div>
  );
}

export default Home;