import React, { useState } from 'react';


function SearchBar(){
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="sbar">
            <input className="search" type="text" placeholder="Search" onChange={handleChange} />
        </div>
    )
}

export default SearchBar;