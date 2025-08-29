import React , {useContext} from "react";
import CityContext from "../context/CityContext"


const CityData=()=>{
    const cities = [ "Berlin", "Hamburg","München", "Köln", "Frankfurt am Main", "Stuttgart", "Düsseldorf", 
    "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hannover", "Nürnberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld",
     "Bonn", "Münster", "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", 
     "Chemnitz", "Kiel", "Aachen", "Halle (Saale)", "Magdeburg", "Freiburg im Breisgau", "Krefeld", "Lübeck", "Oberhausen", "Erfurt", 
     "Mainz", "Rostock", "Kassel", "Hagen", "Saarbrücken", "Hamm", "Potsdam", "Ludwigshafen am Rhein", "Mülheim an der Ruhr", 
     "Oldenburg", "Osnabrück", "Leverkusen", "Heidelberg", "Darmstadt", "Solingen", "Herne", "Neuss", "Regensburg", "Paderborn", 
     "Ingolstadt", "Fürth", "Würzburg", "Wolfsburg", "Offenbach am Main", "Ulm", "Heilbronn", "Pforzheim", "Göttingen", "Bottrop", 
     "Reutlingen", "Koblenz", "Bergisch Gladbach", "Remscheid", "Erlangen", "Moers", "Siegen", "Hildesheim", "Salzgitter", "Cottbus", 
     "Kaiserslautern", "Trier", "Jena", "Zwickau", "Gera" ];

    const {city , setCity} = useContext(CityContext)
    

    return(
        <div>
            <label htmlFor="element">
                <select value={city} onChange={(e)=>setCity(e.target.value)}>
                    {cities.map((element)=> <option key={element} value={element}>{element}</option>)}
                </select>
            </label>
            

        </div>
    )
}
export default CityData;