import React from 'react';
import { useSelector } from 'react-redux';
import SinglePostRender from './SinglePostRender';
import { selectPostById } from '../Redux/PostsSlice';
import { selectSubPostById } from '../Redux/SubReditPostsSlice';


const Post = ({ match }) => {

    const subStatus = useSelector(state => state.community.status);
    let mainPosts = useSelector((state) => selectPostById(state, match.params.id));
    let subPosts = useSelector((state) => {
        if(state.community.status !== 'idle'){
            return selectSubPostById(state, match.params.id)
        } else {
            return null
        }
    }) 

    let post

    if(subStatus === 'idle'){
        post = mainPosts;
    } else {
        post = subPosts;
    }

    /*
    const post = useSelector((state) => selectPostById(state, match.params.id));
    */
    return(
        <div className="feed">
            <SinglePostRender post={post} key={match.params.id} />
        </div>
    )
}

export default Post;