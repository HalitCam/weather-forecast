import {createContext, useState} from "react";

const ForecastContext = createContext();

export const ForecastProvider = ({children}) =>{
    const [forecast , setForecast] = useState (null)

    const values = {
        forecast,
        setForecast
    }
    return(
        <ForecastContext.Provider value = {values}>
            {children}
        </ForecastContext.Provider>
    )
}

export default ForecastContext;