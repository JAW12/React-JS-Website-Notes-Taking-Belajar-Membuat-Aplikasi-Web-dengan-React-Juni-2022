import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: '',
            body: '',
            length: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        if(event.target.value.length <= 50){
            this.setState((prevState) => {
                return {
                    ...prevState,
                    title: event.target.value,
                    length: 50-event.target.value.length,
                }
            });
        }
    }
    
    onBodyChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2 className="note-input__title">Buat catatan</h2>

                <h2 className="note-input__title__char-limit">Sisa karakter: {this.state.length}</h2>


                <input type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea className="note-input__body"placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;