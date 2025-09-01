import './App.css';
import React, { useEffect, useState } from "react";
import ThemeContext, { ThemeProvider } from './context/ThemeContext';
import { CityProvider } from './context/CityContext';
import Container from "./components/Container"
import {ForecastProvider} from './context/forecastContext';


function App() {



  return (
    <div className="App">
      <ThemeProvider>
        <CityProvider>
          <ForecastProvider>

            <Container />

          </ForecastProvider>
        </CityProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
