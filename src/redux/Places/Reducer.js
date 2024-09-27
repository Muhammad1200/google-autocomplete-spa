import { createSlice } from '@reduxjs/toolkit'


export const Places = createSlice({
    name: 'places',
    initialState : {
        places : [],
    },
    reducers: {
        setPlaces: (state, action) => {
            state.places = action?.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { setPlaces  } = Places.actions

export default Places.reducer;