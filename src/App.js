import './App.css';
import axios from 'axios';
import React, { useEffect,useState } from "react";
import ThemeContext, { ThemeProvider } from './context/ThemeContext';
import CityData from "./components/CityData"

function App() {
  const client_id ="DUe97PZCFbicP26eRQYzD"
  const client_secret = "QZGYJ5d8qql3yWZHBTbd5WHVzOGRzsy7SWQo6sfs"
  const [city, setCity] = useState("Dortmund".toLowerCase())
  

  useEffect(() => {
    axios(`https://data.api.xweather.com/forecasts/${city},germany?format=json&filter=day&limit=7&fields=periods.dateTimeISO,loc,periods.maxTempC,periods.minTempC,periods.pop,periods.windSpeedMaxKPH,periods.windDirMax,periods.weather&client_id=${client_id}&client_secret=${client_secret}`)
      .then((res) =>console.log(res.data))
      .catch(error=>console.log(error));
      
  }, [])

  return (
    <div className="App">
      <ThemeProvider>
        <CityData/>
      </ThemeProvider>

    </div>
  );
}

export default App;
