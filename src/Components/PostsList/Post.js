import React, { useState, useEffect } from 'react';
import SinglePostRender from './SinglePostRender';

const Post = ({ match }) => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        const plink = `https://www.reddit.com/${match.params.id}.json?limit=200`;
        async function fetchPost(){
            const response = await fetch(plink);
            const jsonResponse = await response.json();
            setPost(jsonResponse[0].data.children[0]);
            setComments(jsonResponse[1].data.children);
        };
        fetchPost();
    }, []);

    return(
        <div className="feed">
            <SinglePostRender post={post} comments={comments} key={match.params.id} />
        </div>
    );
};

export default Post;