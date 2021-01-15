import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts } from '../Redux/PostsSlice';
import PostRender from './PostRender';

import store from '../Redux/Store';


const SearchResults = () => {

    const posts = useSelector(selectAllPosts);

    const searchTerm = useSelector(state => state.term);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);
/*
    useEffect(() => {
        if(searchTerm !== ''){
            store.dispatch(fetchResults(searchTerm));
        }
    }, [searchTerm])
*/
    let content
/*
    if(postStatus === 'finding'){
        content = <div>Loading...</div>
    } else if (postStatus === 'done'){
        content = posts.data.children.map((post, i)=> (
                <PostRender post={post} key={post.data.id} />
        ))
    } else if (postStatus === 'error'){
        content = {error};
    } 
*/ 
    return(
        <div className='feed'>
            hi
        </div> 
    )
}

export default SearchResults;

/*
{content}
 */