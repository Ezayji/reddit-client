import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostsSlice';
import filterReducer from './FilterSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        filters: filterReducer,
    }, 
})