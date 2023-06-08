import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, archive, onArchive }) {
    const filtered = notes.filter(note => note.archived != archive);

    if(filtered.length > 0){
        return (
            <div className="notes-list">
                {
                    filtered.map((note) => (
                        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
                    ))
                }
            </div>
        )
    }
    else{
        return (
            <div className="notes-list__empty-message">
                Tidak ada catatan
            </div>
        )
    }
}

export default NoteList;