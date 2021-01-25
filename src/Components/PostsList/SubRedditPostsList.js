import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllSubPosts, fetchSubPosts, subRedditAdded } from '../Redux/SubReditPostsSlice';
import PostRender from './PostRender';

import {ResultsForSkeleton}  from '../Skeletons/SearchResultsSkeleton'
import PostsListSkeleton from '../Skeletons/PostsListSkeleton';

import store from '../Redux/Store';


const SubRedditPostsList = ({ match }) => {
    const [postsToLoad, setPostsToLoad] = useState(11);
    
    const matchUrl = match.params.id;

    const posts = useSelector(selectAllSubPosts);
    const subName = useSelector(state => {
        if(state.community.posts.data){
            return state.community.posts.data.children[0].data.subreddit_name_prefixed
        } else {
            return null
        }
    });

    const subNameState = useSelector(state => {
        if(state.community.subReddit){
            return state.community.subReddit;
        } else {
            return null;
        }
    });

    const postStatus = useSelector(state => state.community.status);
    const error = useSelector(state => state.community.error);
    
    useEffect(() => {
        if((subNameState !== matchUrl && postStatus === 'presented') || postStatus === 'idle'){
            console.log(matchUrl);
            console.log(subName);
            store.dispatch(subRedditAdded(matchUrl))
            store.dispatch(fetchSubPosts());
        }
    }, [matchUrl, postStatus])

    const onClick = (e) => {
        e.preventDefault();
        setPostsToLoad(postsToLoad + 10);
    }

    let button = postsToLoad < 200 ? <button className="load-more" onClick={onClick} >Load More</button> : null;
    let header;
    let content;

    if(postStatus === 'requesting'){
        header = <ResultsForSkeleton />
        content = Array(10).fill().map((item, i) => (
            <PostsListSkeleton />
        ))
    } else if (postStatus === 'presented'){
        header = <div className="results-for-div"><h1 className="results-for">{subName}</h1></div>;
        content = posts.data.children.slice(0, postsToLoad).map((post, i)=> (
                <PostRender post={post} key={post.data.id} />
        ))
    } else if (postStatus === 'error'){
        content = {error};
    }

    return(
        <div className='feed main'>
            <div className="feed-div" >
                {header}
                {content}
                {button}
            </div>
        </div>
    )
}

export default SubRedditPostsList;

/* {subName} */