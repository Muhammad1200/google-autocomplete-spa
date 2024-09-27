import { createSlice } from '@reduxjs/toolkit'


export const SearchHistoryReducer = createSlice({
    name: 'searchHistory',
    initialState : {
        searchResponse : [],
    },
    reducers: {
        setSearchResponse: (state, action) => {
            state.searchResponse = [ action?.payload , ...state?.searchResponse ];
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSearchResponse } = SearchHistoryReducer.actions

export default SearchHistoryReducer.reducer;