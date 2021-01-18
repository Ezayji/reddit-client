import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';
import Filter from '../Filter/Filter';

import PostsListSkeleton from '../Skeletons/PostsListSkeleton';
import {ResultsForSkeleton}  from '../Skeletons/SearchResultsSkeleton'

const SearchResults = () => {

    const posts = useSelector(selectAllPosts);

    const searchTerm = useSelector(state => state.posts.term);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);
    
    let heading
    let filter;
    let content

    if(postStatus === 'finding'){
        heading = <ResultsForSkeleton />
        content = Array(10).fill().map((item, i) => (
            <PostsListSkeleton key={i} />
        ))
    } else if (postStatus === 'done'){
        heading = <div className="results-for-div"><h1 className="results-for">Search results for "{searchTerm.replaceAll("%20", " ").trim()}"</h1></div>
        content = posts.data.children.map((post, i)=> (
                <PostRender post={post} key={post.data.id} />
        ))
        filter = <Filter />
    } else if (postStatus === 'error'){
        content = {error};
    }  

    return(
        <div className='feed'>
            <div className="feed-div" >
                {heading}
                {filter}
                {content}
            </div>
        </div> 
    )
}

export default SearchResults;