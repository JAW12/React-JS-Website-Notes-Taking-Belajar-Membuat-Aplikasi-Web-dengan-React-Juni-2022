import React from "react";

function NoteSearch({onSearch}) {
    function onChange(e){
        onSearch(e.target.value);
    }

    return(
        <input type="text" placeholder="Cari catatan ..." onChange={onChange}/>
    )
}

export default NoteSearch;