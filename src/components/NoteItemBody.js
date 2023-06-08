import React from "react";

function NoteItemBody({title, body, createdAt}){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formatDate = new Date(createdAt).toLocaleDateString("id-ID", options);

    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{formatDate}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemBody;