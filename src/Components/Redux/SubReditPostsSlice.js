import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    subReddit: ''
}

export const fetchSubPosts = createAsyncThunk('subreddit/fetchSubPosts', async (_, { getState }) => {
    const sub = getState().community.subReddit;

    const url = `https://www.reddit.com/r/${sub}.json?limit=50`;
    const posts = await fetch(url);
    const jsonResponse = await posts.json();
    return jsonResponse;
})

const subRedditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers: {
        subRedditAdded(state, action) {
            state.subReddit = action.payload
        },
        statusAdded(state, action) {
            state.status = action.payload
        }
    },
    extraReducers: {
        [fetchSubPosts.pending]: (state, action) => {
            state.status = 'requesting'
        },
        [fetchSubPosts.fulfilled]: (state, action) => {
            state.status = 'presented'
            state.posts = action.payload
        },
        [fetchSubPosts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        } 
    }
});

export const { subRedditAdded, statusAdded } = subRedditSlice.actions;
export default subRedditSlice.reducer;

export const selectAllSubPosts = (state) => state.community.posts;
export const selectSubPostById = (state, postId) => {
    
    let posts = state.community.posts.data.children;

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