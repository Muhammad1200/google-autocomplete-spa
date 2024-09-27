import { createSlice } from '@reduxjs/toolkit'

export const Errors = createSlice({
    name: 'error',
    initialState : {
        errors : [],
    },
    reducers: {
        setError : (state,action) => {
            state.errors = action.payload;
        },
        resetError : (state,action) => {
            state.errors = state.error.filter((val,key)=>key != action.payload);
        },
        clearAll : (state,action) => {
            state.errors = [];
        },
        setSuccess : (state,action) => {
            state.errors = [{color : "success", message : action.payload}];
        },
    },
})

// Action creators are generated for each case reducer function
export const { setError , resetError , setSuccess , clearAll } = Errors.actions

export default Errors.reducer