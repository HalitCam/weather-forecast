import  {useFormik} from "formik";
import React, {useContext,} from "react";
import CityContext from  "../context/CityContext"

function DropdownCity(){
    const cities = [ "Berlin", "Hamburg","München", "Köln", "Frankfurt am Main", "Stuttgart", "Düsseldorf", 
    "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hannover", "Nürnberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld",
     "Bonn", "Münster", "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", 
     "Chemnitz", "Kiel", "Aachen", "Halle (Saale)", "Magdeburg", "Freiburg im Breisgau", "Krefeld", "Lübeck", "Oberhausen", "Erfurt", 
     "Mainz", "Rostock", "Kassel", "Hagen", "Saarbrücken", "Hamm", "Potsdam", "Ludwigshafen am Rhein", "Mülheim an der Ruhr", 
     "Oldenburg", "Osnabrück", "Leverkusen", "Heidelberg", "Darmstadt", "Solingen", "Herne", "Neuss", "Regensburg", "Paderborn", 
     "Ingolstadt", "Fürth", "Würzburg", "Wolfsburg", "Offenbach am Main", "Ulm", "Heilbronn", "Pforzheim", "Göttingen", "Bottrop", 
     "Reutlingen", "Koblenz", "Bergisch Gladbach", "Remscheid", "Erlangen", "Moers", "Siegen", "Hildesheim", "Salzgitter", "Cottbus", 
     "Kaiserslautern", "Trier", "Jena", "Zwickau", "Gera" ];

    const {city , setCity} = useContext (CityContext)
    const formik = useFormik({
        initialValues : {
            city : "",
        },
        onSubmit : (values)=>{
            setCity(values.city)
        }
    }) ;
    return(
        <form onSubmit ={ formik.handleSubmit} className="dropdownCity" >
            <label htmlFor="city">Wählen Sie eine Städt aus : </label>
            <br />
            <select name="city" 
            value={formik.values.city} 
            onChange = {formik.handleChange}
            >
                {cities.map((data)=>(<option key={data} value={data}>{data}</option>))}
                
            </select>
            <br />
            <br />
            <button type="submit">Ergebnisse !</button>
            

        </form>
    )
    }

    export default DropdownCity;