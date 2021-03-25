import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({ movieReducer, favoriteReducer })


export default rootReducer;