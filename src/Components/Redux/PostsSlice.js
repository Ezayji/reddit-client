import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    term: '',
    category: 'best'
}

export const fetchInitialPosts = createAsyncThunk('posts/fetchInitialPosts', async (_, { getState }) => {
    const category = getState().posts.category
    
    const url = `https://www.reddit.com/${category}.json?limit=200`;
    const posts = await fetch(url);
    const jsonResponse = await posts.json()
    console.log(url);
    return jsonResponse;
})

export const fetchResults = createAsyncThunk('posts/fetchResults', async (_, { getState }) => {
    const sortBy = getState().filters.sortBy.toLowerCase();
    const postsFrom = getState().filters.postsFrom;
    const type = getState().filters.type;
    
    const term = getState().posts.term; 
    const url = `https://www.reddit.com/search.json?q=${term}&sort=${sortBy}&t=${postsFrom}&type=${type}&limit=200`
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(url);
    return jsonResponse
})



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        termAdded(state, action) {
            state.term = action.payload
        },
        categoryAdded(state, action) {
            state.category = action.payload
        },
        statusAdded(state, action) {
            state.status = action.payload
        }
    },
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
        },
        [fetchResults.pending]: (state, action) => {
            state.status = 'finding'
        },
        [fetchResults.fulfilled]: (state, action) => {
            state.status = 'done'
            state.posts = action.payload
        },
        [fetchResults.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        } 
    }
});



export const { termAdded, categoryAdded, statusAdded } = postsSlice.actions
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