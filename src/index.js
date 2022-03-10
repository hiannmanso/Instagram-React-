import reactDOM from "react-dom";
import NavBar from "./NavBar";
import Corpo from "./Corpo";
import FundoMobile from './FundoMobile'



function App(params) {
    return(
        <div>
            <NavBar/>
            <Corpo/>
            <FundoMobile/>
        </div>
       
    )
}


const container = document.querySelector('.root')
reactDOM.render(<App/>,container )