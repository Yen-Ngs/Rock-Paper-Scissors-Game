import { combineReducers, createStore } from "redux";
import GameReducer from './GameReducer';
const rootReducer = combineReducers({
    GameReducer
})
export const store = createStore(rootReducer);