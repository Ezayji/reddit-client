import React, { useState, useEffect } from 'react';
import SingleComment from './SingleComment';

import CommentsSkeleton from '../Skeletons/CommentsSkeleton';

const Content = ({ url }) => {
    const [comments, setComments] = useState(null);
    
    useEffect(() => {
        const clink = `https://www.reddit.com${url}.json?limit=200`
        async function fetchComments(){
            const response = await fetch(clink);
            const jsonResponse = await response.json();
            setComments(jsonResponse);
        }
        fetchComments();
    }, [url])
    
    let commentsRender;

    if(!comments){
        commentsRender = Array(5).fill().map((item, i) => (
            <CommentsSkeleton />
        ))
        
    } else {
        commentsRender = (
            comments[1].data.children.map((comment, i) => (
                <SingleComment comment={comment} key={i} />
            ))
        )
    }

    return(
        <div className="comments">
            {commentsRender}
        </div>
    )
}

export default Content;