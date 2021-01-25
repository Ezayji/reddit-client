import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts, fetchInitialPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';

import {statusAdded} from '../Redux/SubReditPostsSlice';

import MainPageFilter from '../Filter/MainPageFilter';
import FeaturedSubs from './FeaturedSubs';

import PostsListSkeleton from '../Skeletons/PostsListSkeleton';

import store from '../Redux/Store';


function PostsList(){
    const [postsToLoad, setPostsToLoad] = useState(11);

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        if(postStatus === 'idle' || postStatus === 'done') {
            store.dispatch(statusAdded('idle'));
            store.dispatch(fetchInitialPosts());
            setPostsToLoad(11);
        }
    }, [postStatus])

    const onClick = (e) => {
        e.preventDefault();
        setPostsToLoad(postsToLoad + 10);
    }
    
    let button = postsToLoad < 200 ? <button className="load-more" onClick={onClick} >Load More</button> : null;
    let content;
    
  
    if(postStatus === 'loading' || postStatus === 'idle' || postStatus === 'done'){
        content = Array(10).fill().map((item, i) => (
            <PostsListSkeleton key={i} />
        ))
    } else if (postStatus === 'succeeded'){
        content = posts.data.children.slice(0, postsToLoad).map((post, i)=> (
                <PostRender post={post} key={post.data.id} />
        ))
    } else if (postStatus === 'error'){
        content = {error};
    } 

    return(
        <div className='feed main'>
            <div className="placeholder"></div>
            <div className="feed-div" >
                <MainPageFilter />
                {content}
                {button}
            </div>
            <FeaturedSubs />
        </div>
    )
}

export default PostsList;