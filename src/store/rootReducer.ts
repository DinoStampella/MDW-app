import { combineReducers } from "@reduxjs/toolkit";
import { reducer as charactersReducer } from '../../src/slices/characters'

const rootReducer = combineReducers({
    characters: charactersReducer
});

export default rootReducer;