import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';
import CommunityList from './CommunityList';
import Filter from '../Filter/Filter';
import TypeFilter from '../Filter/TypeFilter';

import PostsListSkeleton from '../Skeletons/PostsListSkeleton';
import SubRedditListSkeleton from '../Skeletons/SubRedditListSkeleton';
import {ResultsForSkeleton}  from '../Skeletons/SearchResultsSkeleton'

const SearchResults = () => {

    const posts = useSelector(selectAllPosts);

    const currentType = useSelector(state => state.filters.type);

    const searchTerm = useSelector(state => state.posts.term);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);
    
    let heading
    let filter;
    let content
    let type_Filter;

    if(postStatus === 'finding' && currentType === 'link'){
        heading = <ResultsForSkeleton />
        content = Array(10).fill().map((item, i) => (
            <PostsListSkeleton key={i} />
        ))
    } else if (postStatus === 'finding' && currentType === 'sr'){
        heading = <ResultsForSkeleton />
        content = Array(10).fill().map((item, i) => (
            <SubRedditListSkeleton key={i} />
        ))
    } else if (postStatus === 'done' && currentType === 'link'){
        heading = <div className="results-for-div"><h1 className="results-for">Search results for "{searchTerm.replaceAll("%20", " ").trim()}"</h1></div>
        content = posts.data.children.map((post, i)=> (
                <PostRender post={post} key={post.data.id} />
        ))
        filter = <Filter />
        type_Filter = <TypeFilter />
    } else if(postStatus === 'done' && currentType === 'sr'){
        heading = <div className="results-for-div"><h1 className="results-for">Search results for "{searchTerm.replaceAll("%20", " ").trim()}"</h1></div>
        filter = <Filter />
        type_Filter = <TypeFilter />
        content = posts.data.children.map((post, i)=> (
            <CommunityList community={post} key={post.data.id} />
    ))
    } else if (postStatus === 'error'){
        content = {error};
    }  

    return(
        <div className='feed'>
            <div className="feed-div" >
                {heading}
                {filter}
                {type_Filter}
                {content}
            </div>
        </div> 
    )
}

export default SearchResults;