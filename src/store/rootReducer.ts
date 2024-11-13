import { combineReducers } from "@reduxjs/toolkit";
import { reducer as charactersReducer } from '../../src/slices/characters'
import { reducer as productsReducer } from '../../src/slices/products'

const rootReducer = combineReducers({
    characters: charactersReducer,
    products: productsReducer,
});

export default rootReducer;