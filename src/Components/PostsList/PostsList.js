import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchInitialPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';

import PostsListSkeleton from '../Skeletons/PostsListSkeleton';

import store from '../Redux/Store';


function PostsList(){
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        if(postStatus === 'idle' || postStatus === 'done') {
        store.dispatch(fetchInitialPosts());
        }
    }, [postStatus, dispatch])

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
        <div className='feed'>
            {content}
        </div> 
    )
}

export default PostsList;

// <div>Loading...</div>