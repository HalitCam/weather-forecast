import React, { createContext, useState } from 'react';

const CityContext = createContext();

export const Cities = (children) => {
    const [city, setCity] = useState(null)
    const values = {city, setCity}

    return (
        <CityContext.Provider value={values}>
            {children}
        </CityContext.Provider>
    );
}

export default Cities;
