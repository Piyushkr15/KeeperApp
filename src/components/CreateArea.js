import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, updatenote] = useState({
        title: "",
        content: ""
    })
    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        updatenote(prevnote => {
            return {
                ...prevnote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        updatenote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function Expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (<input name="title" onChange={handleChange} value={note.title} placeholder="Title" />)}
                <textarea
                    onChange={handleChange}
                    onClick={Expand}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
