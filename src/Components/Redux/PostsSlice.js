import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchInitialPosts = createAsyncThunk('posts/fetchInitialPosts', async () => {
    const url = 'https://www.reddit.com/r/EarthPorn.json?limit=50';
    const posts = await fetch(url);
    const jsonResponse = await posts.json()
    return jsonResponse;
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchInitialPosts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchInitialPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.posts = action.payload
        },
        [fetchInitialPosts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
});

export default postsSlice.reducer

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => {
    
    let posts = state.posts.posts.data.children;

    let nr = 0;

    for (let i = 0; i < posts.length; i++){
        let arrayNr = 0;
        if(Object.values(posts[i].data).includes(postId)){
            arrayNr += i;
        }
        nr += arrayNr;
    }

    return posts[nr]
};

/* state.posts.posts.data.children.find((post) => post.data.key === postId) */