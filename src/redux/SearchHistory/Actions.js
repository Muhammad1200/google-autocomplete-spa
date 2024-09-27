import {createAsyncThunk} from "@reduxjs/toolkit";
import {setSearchResponse} from "./Reducer";

export const searchPlaces = createAsyncThunk('get-places-request',
    async (searchData, {
        dispatch,
        rejectWithValue,
        fulfillWithValue,
        getState
    }) => {
        try {
            dispatch(setSearchResponse(searchData));

            return fulfillWithValue(true);

        } catch (e) {
            return rejectWithValue(false);
        }
});
