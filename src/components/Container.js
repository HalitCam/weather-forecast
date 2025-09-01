import DropdownCity from "./DropdownCity";
import "../App.js"
import CityApi from "./CityApi.js"

const Container = () => {

    return (
        <div >
            {<h1 style={{color:'gray'}}>DAS WETTER</h1>}
            <DropdownCity/>
            <CityApi/>
        </div>

    )
}

export default Container;

