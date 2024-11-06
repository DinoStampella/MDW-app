import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { TypedUseSelectorHook } from "react-redux";

import { 
    useDispatch as  useReduxDispatch,
    useSelector as useReduxSelector
} from "react-redux";

const store = configureStore({
    reducer: {
        reducer: rootReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;