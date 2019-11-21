import React, { useEffect, useState } from "react";
import axios from "axios";

import ListOfNotes from "./ListOfNotes";


const NotesContainer = () => {
    const [ localStateVariable, setLocalStateFunction ] = useState("blah blah blah default state");
    //   how to access the hook (variable).   how to modify to hook (function).   default hook state (could be whatever).

    // This component is going to hit the api and get all the notes.
    // https://fe-notes.herokuapp.com/note/get/all
    // We gotta do an axios or fetch from that endpoint

    useEffect(() => {
        axios.get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => {
            // console.log("This is the repsonse from the API", response.data)
            
            setLocalStateFunction(response.data)
        })
        .catch(error => console.log(error))
    }, [])


    // console.log('localState', localStateVariable)

    return (
        <>
            <ListOfNotes 
                localStateVariable={localStateVariable}   
                whateverYouWant="a string"   
                setLocalStateFunction={setLocalStateFunction} 
            />
        </>
    )
};



export default NotesContainer;

