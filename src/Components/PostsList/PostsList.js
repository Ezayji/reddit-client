import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchInitialPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';

import {statusAdded} from '../Redux/SubReditPostsSlice';

import MainPageFilter from '../Filter/MainPageFilter';
import FeaturedSubs from './FeaturedSubs';

import PostsListSkeleton from '../Skeletons/PostsListSkeleton';

import store from '../Redux/Store';


function PostsList(){
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        if(postStatus === 'idle' || postStatus === 'done') {
            store.dispatch(statusAdded('idle'));
            store.dispatch(fetchInitialPosts());
        }
    }, [postStatus, dispatch])

    let mainPageFilter = <MainPageFilter />;
    let content
  
    if(postStatus === 'loading'){
        content = Array(10).fill().map((item, i) => (
            <PostsListSkeleton />
        ))
    } else if (postStatus === 'succeeded'){
        
        content = posts.data.children.map((post, i)=> (
                <PostRender post={post} key={post.data.id} />
        ))
    } else if (postStatus === 'error'){
        content = {error};
    } 

    return(
        <div className='feed main'>
            <div className="placeholder"></div>
            <div className="feed-div" >
                {mainPageFilter}
                {content}
            </div>
            <FeaturedSubs />
        </div>
    )
}

export default PostsList;

// <div>Loading...</div>