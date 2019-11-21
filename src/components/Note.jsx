import React from 'react';


const Note = props => {


    return (
        <section className="note-card" >
            <h4>{props.eachNote.title}</h4>
            <p>{props.eachNote.textBody}</p>
        </section>        
    );
}


export default Note;

