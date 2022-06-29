import axios from 'axios'
import React, {Fragment, useEffect, useState} from 'react';
import styles from'./Api.module.css'

function Api() {

    const [location, setLocation] = useState(false)

    const [weather, setWeather] = useState(false)

    let geWeather = async (lat, long) => {
        let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {params: {
          lat: lat,
          lon: long,
          appid:process.env.REACT_APP_OPEN_WEATHER_KEY,
          lang: 'pt',
          units: 'metric'
        }});
        setWeather(res.data)
    }

    useEffect(() => {
        navigator
            .geolocation
            .getCurrentPosition((position) => {
                geWeather(position.coords.latitude, position.coords.longitude)
                setLocation(true)
            })
    }, [])
    return location
}

export default Api;
