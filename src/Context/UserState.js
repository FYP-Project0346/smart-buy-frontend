import userContext from "./Create-Context";
import { useState } from "react";

function ProfileState(props){
    const data = {
        type: "guest",
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        token: "",
    }

    const [state, setState] = useState(data)

    function update(data){
        setState(data)
    }

    function reset(){
        setState(data)
    }

    return <userContext.Provider value={{ state, update, reset }}>
        {props.children}
    </userContext.Provider>
}

export default ProfileState