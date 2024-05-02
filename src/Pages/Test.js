
// import userContext from "../Context/Create-Context"
import {autologin} from "../services/auth"

function Test(){

    return <>
    <button
    
    onClick={()=>{


autologin();




    }}
    
        >Set Coookie</button>

    
    
    </>
}

export default Test