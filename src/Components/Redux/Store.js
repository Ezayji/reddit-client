import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostsSlice';
import filterReducer from './FilterSlice';
import subRedditReducer from './SubReditPostsSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        filters: filterReducer,
        community: subRedditReducer,
    }, 
})