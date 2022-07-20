import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userAPI} from "../services/User";
import sortReduser from './reducers/sortSlice'

const rootReducer = combineReducers({
    sortReduser,
    [userAPI.reducerPath]: userAPI.reducer
})

export const initStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore["dispatch"];