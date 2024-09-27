import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import PlacesReducer from './Places/Reducer';
import ErrorsReducer from './Errors/Reducer';
import { thunk } from 'redux-thunk';
import SearchHistoryReducer from "./SearchHistory/Reducer";



// Set up persist configuration
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['searchHistory'], // Only persist the 'SearchHistory' reducer
};

// Combine reducers (you can add more slices here)
const rootReducer = combineReducers({
    places : PlacesReducer,
    searchHistory : SearchHistoryReducer,
    errors : ErrorsReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk, // Thunk is added here
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };

export default store;