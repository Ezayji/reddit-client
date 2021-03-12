import React from 'react';
import SingleComment from './SingleComment';

import CommentsSkeleton from '../Skeletons/CommentsSkeleton';

const Content = ({ comments }) => {

    let commentsRender;

    if(!comments){
        commentsRender = Array(5).fill().map((item, i) => (
            <CommentsSkeleton />
        ))
        
    } else {
        commentsRender = (
            comments.map((comment, i) => (
                <SingleComment comment={comment} key={i} />
            ))
        )
    }

    return(
        <div className="comments">
            {commentsRender}
        </div>
    )
};

export default Content;