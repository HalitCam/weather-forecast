import React from "react"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CityContext from "../context/CityContext";
import DropdownCity from "./DropdownCity";
import ForecastContext from "../context/ForecastContext"

function CityApi() {
    const client_id = "DUe97PZCFbicP26eRQYzD"
    const client_secret = "QZGYJ5d8qql3yWZHBTbd5WHVzOGRzsy7SWQo6sfs"

    const {forecast, setForecast} = useContext(ForecastContext)

    const {city} = useContext(CityContext)

   

    
    useEffect(() => {
        axios(`https://data.api.xweather.com/forecasts/${city},germany?format=json&filter=day&limit=7&fields=periods.dateTimeISO,loc,periods.maxTempC,periods.minTempC,periods.pop,periods.windSpeedMaxKPH,periods.windDirMax,periods.weather&client_id=${client_id}&client_secret=${client_secret}`)
            .then((res) =>setForecast (res.data))
            .catch(error => console.error("Hava Durumu Alinamadi" , error));
            

    }, [city])

    return (
        <div>
           {city ? <h1 style={{color: "gray", fontFamily: 'Red/Black, sans-serif'}}>Das Wetter für {city}</h1> : null}

     
           

        </div>
    )
}

export default CityApi;