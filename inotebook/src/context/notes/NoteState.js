import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
    const s1 = {
        "name" : "Anant", 
        "class" : "10A"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name":"Andy",
                "class": "11B"
            })
        },1000);
    }
    return (                                          
        <NoteContext.Provider value={{state, update}}>
        {props.children}
        </NoteContext.Provider>
    )
} 

export default NoteState;