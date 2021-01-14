import React, { useState, useEffect } from 'react';
import SingleComment from './SingleComment';

const Content = ({ url }) => {
    const [comments, setComments] = useState();
    useEffect(() => {
        const clink = `https://www.reddit.com${url}.json`
        async function fetchComments(){
            const response = await fetch(clink);
            const jsonResponse = await response.json();
            setComments(jsonResponse);
        }
        fetchComments();
    }, [])
    
    if(!comments){
        return <h1>Loading</h1>
    }

    return(
        <div className="comments">
            {comments[1].data.children.map((comment, i) => (
                <SingleComment comment={comment} key={i} />
            ))}
        </div>
    )
}

export default Content;