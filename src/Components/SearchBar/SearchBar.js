import React, { useState } from 'react';
import { termAdded, fetchResults } from '../Redux/PostsSlice';
import store from "../Redux/Store";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sortByAdded, postFromAdded } from '../Redux/FilterSlice';



function SearchBar(){
    const [input, setInput] = useState('');

    const sortBy = useSelector(state => state.filters.sortBy);
    const postsFrom = useSelector(state => state.filters.postsFrom);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    let term = [];

    const searchActions = () => {
        
        const splitInput = input.split(' ');
        
        const improved = splitInput.map(word => word = word + '%20');
    
        const search = improved.join('');
    
        store.dispatch(termAdded(search));
    
        store.dispatch(fetchResults())
        
        setInput('')
    }

    const onSearch = (e) => {
        e.preventDefault();
        if(sortBy !== "Relevance" && postsFrom !== "all"){
            store.dispatch(sortByAdded("Relevance"));
            store.dispatch(postFromAdded("all"));
            searchActions();
        } else if (sortBy !== "Relevance" && postsFrom === "all"){
            store.dispatch(sortByAdded("Relevance"));
            searchActions();
        } else if (sortBy === "Relevance" && postsFrom !== "all"){
            store.dispatch(postFromAdded("all"));
            searchActions();
        } else {
            searchActions();
        }

    }

    let search;

    if(input){
        term.push(input);
        search = (
            <div className="find-div" onClick={onSearch}>
                <Link to={`/search/${term[term.length - 1]}`} className="find-link" >
                    <div className="find"></div>
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