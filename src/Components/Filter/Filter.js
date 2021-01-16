import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { sortByAdded, postFromAdded } from '../Redux/FilterSlice';

import store from '../Redux/Store';

const Filter = () => {
    const sortBy = useSelector(state => state.filters.sortBy);
    const postsFrom = useSelector(state => state.filters.postsFrom);

    const [sort, setSort] = useState(sortBy);
    const [from, setFrom] = useState(postsFrom);
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(sortBy !== sort && postsFrom !== from){
            store.dispatch(sortByAdded(sort));
            store.dispatch(postFromAdded(from));
        } else if (sortBy !== sort && postsFrom === from){
            store.dispatch(sortByAdded(sort));
        } else if(sortBy === sort && postsFrom !== from){
            store.dispatch(postFromAdded(from));
        } else {
            return
        }
    }

    let input;

    if(sortBy !== sort && postsFrom !== from || sortBy !== sort && postsFrom === from || sortBy === sort && postsFrom !== from){
        input = <input type="submit" value="Filter" />
    } else {
        input = null;
    }

    return(
        <div className="filter-div" >
            <form onSubmit={onSubmit} >
                <div className="label-select-div">
                    <label>
                        <p>SORT BY</p>
                        <select value={sort} onChange={(e) => {setSort(e.target.value)}} >
                            <option value="Relevance" >Relevance</option>
                            <option value="Hot" >Hot</option>
                            <option value="Top" >Top</option>
                            <option value="New" >New</option>
                            <option value="Comments" >Comments</option>
                        </select>
                    </label>
                    <label>
                        <p>POSTS FROM</p>
                        <select value={from} onChange={(e) => {setFrom(e.target.value)}} >
                            <option value="Past 24 Hours" >Past 24 Hours</option>
                            <option value="Past Week" >Past Week</option>
                            <option value="Past Month" >Past Month</option>
                            <option value="Past Year" >Past Year</option>
                            <option value="All Time" >All Time</option>
                        </select>
                    </label>
                </div>
                {input}
            </form>
        </div>
    )
}

export default Filter;