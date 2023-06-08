import React from "react";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

class NoteApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search: '',
            active_notes: getInitialData().filter(note => note.archived === false),
            archived_notes: getInitialData().filter(note => note.archived === true),
            filtered_active_notes: getInitialData().filter(note => note.archived === false),
            filtered_archived_notes: getInitialData().filter(note => note.archived === true),
        }

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onRestoreHandler = this.onRestoreHandler.bind(this);
    }

    onSearchHandler(title){
        const search = title.toLowerCase();
        if(search.length === 0){
            const filtered_active_notes = this.state.active_notes;
            const filtered_archived_notes = this.state.archived_notes;
            this.setState({search, filtered_active_notes, filtered_archived_notes});
        }
        else {
            const filtered_active_notes = this.state.active_notes.filter(note => note.title.toLowerCase().includes(search));
            const filtered_archived_notes = this.state.archived_notes.filter(note => note.title.toLowerCase().includes(search));
    
            this.setState({search, filtered_active_notes, filtered_archived_notes});
        }
    }

    onDeleteHandler(id){
        console.log(this.state.search);
        const active_notes = this.state.active_notes.filter(note => note.id !== id);
        const archived_notes = this.state.archived_notes.filter(note => note.id !== id);

        if(this.state.search.length === 0){
            const filtered_active_notes = active_notes;
            const filtered_archived_notes = archived_notes;
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }
        else{
            const filtered_active_notes = active_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
            const filtered_archived_notes = archived_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }

    }

    onArchiveHandler(id, title, body, createdAt){
        const active_notes = this.state.active_notes.filter(note => note.id !== id);
        
        let archived_notes = this.state.archived_notes;
        archived_notes = [...archived_notes, {
            id: id,
            title: title,
            body: body,
            createdAt: createdAt,
            archived: true,
        }];
        

        if(this.state.search.length === 0){
            const filtered_active_notes = active_notes;
            const filtered_archived_notes = archived_notes;
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }
        else{
            const filtered_active_notes = active_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
            const filtered_archived_notes = archived_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }

    }

    onRestoreHandler(id, title, body, createdAt){
        // const archived_notes = this.state.archived_notes.filter(note => note.id !== id);
        // this.setState({archived_notes});
        // this.setState((prevState) => {
        //     return {
        //         active_notes: [
        //             ...prevState.active_notes,
        //             {
        //                 id: id,
        //                 title: title,
        //                 body: body,
        //                 createdAt: createdAt,
        //                 archived: false,
        //             }
        //         ]
        //     }
        // });

        const archived_notes = this.state.archived_notes.filter(note => note.id !== id);
        
        let active_notes = this.state.active_notes;
        active_notes = [...active_notes, {
            id: id,
            title: title,
            body: body,
            createdAt: createdAt,
            archived: false,
        }];

        if(this.state.search.length === 0){
            const filtered_active_notes = active_notes;
            const filtered_archived_notes = archived_notes;
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }
        else{
            const filtered_active_notes = active_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
            const filtered_archived_notes = archived_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }
    }

    onAddNoteHandler({title, body}){
        let active_notes = this.state.active_notes;
        active_notes = [...active_notes, {
            id: +new Date(),
            title,
            body,
            createdAt:+new Date(),
            archived: false,
        }];

        const archived_notes = this.state.archived_notes;

        if(this.state.search.length === 0){
            const filtered_active_notes = active_notes;
            const filtered_archived_notes = archived_notes;
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }
        else{
            const filtered_active_notes = active_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
            const filtered_archived_notes = archived_notes.filter(note => note.title.toLowerCase().includes(this.state.search));
    
            this.setState({active_notes, archived_notes, filtered_active_notes, filtered_archived_notes});
        }
        
        // this.setState((prevState) => {
        //     return {
        //         active_notes: [
        //             ...prevState.active_notes,
        //             {
        //                 id: +new Date(),
        //                 title,
        //                 body,
        //                 createdAt:+new Date(),
        //                 archived: false,
        //             }
        //         ]
        //     }
        // });
    }

    render(){
        return (
            <div className="note-app">
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <NoteSearch onSearch={this.onSearchHandler} />
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={this.state.filtered_active_notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archive={true}/>
                    <h2>Arsip</h2>
                    <NoteList notes={this.state.filtered_archived_notes} onDelete={this.onDeleteHandler} onArchive={this.onRestoreHandler} archive={false}/>
                </div>
            </div>
        )
    }
}

export default NoteApp;