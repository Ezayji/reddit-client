import React, { useState, useEffect } from 'react';
import SinglePostRender from './SinglePostRender';

const Post = ({ match }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const plink = `https://www.reddit.com/${match.params.id}.json`;
        async function fetchPost(){
            const response = await fetch(plink);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setPost(jsonResponse[0].data.children[0]);
        };
        fetchPost();
    }, []);

    return(
        <div className="feed">
            <SinglePostRender post={post} key={match.params.id} />
        </div>
    );
};

export default Post;