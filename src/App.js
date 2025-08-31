import './App.css';
import React, { useEffect,useState } from "react";
import ThemeContext, { ThemeProvider } from './context/ThemeContext';
import { CityProvider } from './context/CityContext';
import Container from "./components/Container"

function App() {

    <div className="App">
      <ThemeProvider>
        <CityProvider>
          <Container/>
              
        </CityProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
