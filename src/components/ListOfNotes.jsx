import React from 'react';
import Loader from "react-loader-spinner";

import Note from "./Note";


const ListOfNotes = (props) => {
    console.log("props of listOfNotes   --->  ", props.localStateVariable, props)

    
    if (!Array.isArray(props.localStateVariable)) {
        return (
            <section className="loader-spinner">
                <Loader
                    type="TailSpin"
                    color="#09d3ac"
                    height={225}
                    width={225}
                    timeout={3000} // 3 secs
                />
            </section>
        )
    } 
    

    else {
        return (
            <>
                {props.localStateVariable.map(eachNote => (
                    <Note 
                        key={eachNote._id} 
                        eachNote={eachNote} 
                    />
                ))}
            </>
        )
    }


}


export default ListOfNotes

