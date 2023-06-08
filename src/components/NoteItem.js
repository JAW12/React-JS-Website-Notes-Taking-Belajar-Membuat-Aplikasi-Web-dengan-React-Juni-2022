import React from "react";
import NoteItemBody from "./NoteItemBody";
import NodeItemButton from "./NoteItemButton";  

function NoteItem({ title, body, createdAt, archived, id, onDelete, onArchive}){
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
            <NodeItemButton id={id} title={title} body={body} createdAt={createdAt} onDelete={onDelete} archived = {archived} onArchive={onArchive} />
        </div>
    )
}

export default NoteItem;