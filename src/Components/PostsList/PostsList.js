import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchInitialPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';

import store from '../Redux/Store';


function PostsList(){
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        if(postStatus === 'idle') {
            store.dispatch(fetchInitialPosts());
        }
    }, [postStatus, dispatch])

    let content

    if(postStatus === 'loading'){
        content = <div>Loading...</div>
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