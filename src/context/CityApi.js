import {createContext} from "react";
import axios from "axios";

const CityApi = createContext() ;

export const CityApiProvider = (children) =>{
      const client_id ="DUe97PZCFbicP26eRQYzD"
      const client_secret = "QZGYJ5d8qql3yWZHBTbd5WHVzOGRzsy7SWQo6sfs"

    return(
        <CityApi.Provider>
            {children}
        </CityApi.Provider>
        
    )
}

export default CityApi;