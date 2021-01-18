import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortBy: "Relevance",
    postsFrom: "all",
    type: "link"
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        sortByAdded(state, action){
            state.sortBy = action.payload
        },
        postFromAdded(state,action){
            state.postsFrom = action.payload
        },
        typeAdded(state, action) {
            state.type = action.payload
        }
    }
})

export default filterSlice.reducer;
export const { sortByAdded, postFromAdded, typeAdded } = filterSlice.actions;