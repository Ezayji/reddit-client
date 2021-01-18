import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllSubPosts, fetchSubPosts } from '../Redux/SubReditPostsSlice';
import PostRender from './PostRender';

import PostsListSkeleton from '../Skeletons/PostsListSkeleton';

import store from '../Redux/Store';


const SubRedditPostsList = () => {
    return(
        <div className='feed main'>
            <div className="feed-div" >
                {content}
            </div>
        </div>
    )
}