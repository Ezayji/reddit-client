import React, { useState } from 'react';
import { termAdded, fetchResults } from '../Redux/PostsSlice';
import store from "../Redux/Store";
import { Link } from 'react-router-dom';

function SearchBar(){
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    let term = [];

    const onSearch = (e) => {
        e.preventDefault();
        const splitInput = input.split(' ');
        
        const improved = splitInput.map(word => word = word + '%20');

        const search = improved.join('');

        store.dispatch(termAdded(search));

        store.dispatch(fetchResults())
        
        setInput('')
    }

    let search;

    if(input){
        term.push(input);
        search = (
            <div className="find-div" onClick={onSearch}>
                <Link to={`/search/${term[term.length - 1]}`} className="find" >
                    <p>Find</p>
                </Link>
            </div>
        )
        
    } else {
        search = null;
    }
 
    return (
        <div className="sbar">
            <input className="search" type="text" placeholder="Search" onChange={handleChange} value={input} />
            {search}
        </div>
    )
}

export default SearchBar;

/* <button className="find" onClick={onSearch} /> */