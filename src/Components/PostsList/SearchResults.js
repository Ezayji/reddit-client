import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';
import CommunityList from './CommunityList';
import Filter from '../Filter/Filter';
import TypeFilter from '../Filter/TypeFilter';

import store from '../Redux/Store';
import { termAdded, fetchResults } from '../Redux/PostsSlice';

import PostsListSkeleton from '../Skeletons/PostsListSkeleton';
import SubRedditListSkeleton from '../Skeletons/SubRedditListSkeleton';


const SearchResults = ({ match }) => {
    const [postsToLoad, setPostsToLoad] = useState(11);

    const urlTerm = match.params.id.replaceAll(' ', '%20');
    const matchTerm = urlTerm.concat('%20');

    const posts = useSelector(selectAllPosts);

    const currentType = useSelector(state => state.filters.type);

    const searchTerm = useSelector(state => state.posts.term);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);
    
    useEffect(() => {
        if((matchTerm !== searchTerm && postStatus === 'done') || (matchTerm === searchTerm && postStatus === 'succeeded')){
            store.dispatch(termAdded(matchTerm))
            store.dispatch(fetchResults());
            setPostsToLoad(11);
        }
    }, [matchTerm, postStatus])

    const onClick = (e) => {
        e.preventDefault();
        setPostsToLoad(postsToLoad + 10);
    }
    
    let content
    let button = postsToLoad <= posts.data.children.length && currentType !== 'sr'  ? <button className="load-more" onClick={onClick} >Load More</button> : null;
    
    if(postStatus === 'finding' && currentType === 'link'){
        content = Array(10).fill().map((item, i) => (
            <PostsListSkeleton key={i} />
        ))
    } else if (postStatus === 'finding' && currentType === 'sr'){
        content = Array(10).fill().map((item, i) => (
            <SubRedditListSkeleton key={i} />
        ))
    } else if (postStatus === 'done' && currentType === 'link'){
        content = posts.data.children.slice(0, postsToLoad).map((post, i) => (
                <PostRender post={post} key={post.data.id} />
        ))
    } else if(postStatus === 'done' && currentType === 'sr'){
        content = posts.data.children.map((post, i)=> (
            <CommunityList community={post} key={post.data.id} />
    ))
    } else if (postStatus === 'error'){
        content = {error};
    }  

    return(
        <div className='feed'>
            <div className="feed-div" >
                <div className="results-for-div bottom-border"><h1 className="results-for">Search results for "{searchTerm.replaceAll("%20", " ").trim()}"</h1></div>
                <Filter />
                <TypeFilter />
                {content}
                {button}
            </div>
        </div> 
    )
}

export default SearchResults;
// import {ResultsForSkeleton}  from '../Skeletons/SearchResultsSkeleton'
// <ResultsForSkeleton />
/*
    let heading
    let filter;
    let content
    let type_Filter;
                {heading}
                {filter}
                {type_Filter}

heading = <ResultsForSkeleton />
heading = <div className="results-for-div"><h1 className="results-for">Search results for "{searchTerm.replaceAll("%20", " ").trim()}"</h1></div>
filter = <Filter />
type_Filter = <TypeFilter />
*/