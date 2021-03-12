import React, { useState } from 'react';
import { termAdded, fetchResults, categoryAdded } from '../Redux/PostsSlice';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sortByAdded, postFromAdded } from '../Redux/FilterSlice';
import { statusAdded } from '../Redux/SubReditPostsSlice';

function SearchBar(){
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const location = useLocation();

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

        dispatch(statusAdded('idle'))

        dispatch(categoryAdded('best'))
    
        dispatch(termAdded(search));
    
        dispatch(fetchResults())
        
        setInput('')
    }

    const onSearch = (e) => {
        e.preventDefault();
        if(sortBy !== "Relevance" && postsFrom !== "all"){
            dispatch(sortByAdded("Relevance"));
            dispatch(postFromAdded("all"));
            searchActions();
        } else if (sortBy !== "Relevance" && postsFrom === "all"){
            dispatch(sortByAdded("Relevance"));
            searchActions();
        } else if (sortBy === "Relevance" && postsFrom !== "all"){
            dispatch(postFromAdded("all"));
            searchActions();
        } else {
            searchActions();
        }

    }

    let search;
    let searchBar;

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

    if(!location.pathname.includes("/post/")){
        searchBar = <input className="search" type="text" placeholder="Search" onChange={handleChange} value={input} />
    } else {
        searchBar = null;
    }
 
    return (
        <div className="sbar">
            {searchBar}
            {search}
        </div>
    )
}

export default SearchBar;