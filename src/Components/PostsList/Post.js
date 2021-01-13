import React from 'react';
import { useSelector } from 'react-redux';
import SinglePostRender from './SinglePostRender';
import { selectPostById } from '../Redux/PostsSlice';



const Post = ({ match }) => {

    const post = useSelector((state) => selectPostById(state, match.params.id));

    return(
        <div className="feed">
            <SinglePostRender post={post} key={match.params.id} />
        </div>
    )
}

export default Post;
/* <PostRender post={post} key={postId} /> */