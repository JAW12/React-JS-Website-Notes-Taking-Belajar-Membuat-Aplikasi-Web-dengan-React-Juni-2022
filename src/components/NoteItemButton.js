import React from "react";

function NoteItemButton({ id, title, body, createdAt, archived, onDelete, onArchive }){
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            {
                archived === false ?
                <button className="note-item__archive-button" onClick={() => onArchive(id, title, body, createdAt)}>Arsipkan</button>
                :
                <button className="note-item__archive-button" onClick={() => onArchive(id, title, body, createdAt)}>Pindahkan</button>
            }
        </div>
    )
}

export default NoteItemButton;