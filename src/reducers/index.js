import {combineReducers} from "redux";
/*
     board , news ....
 */
import foodReducer from "./foodReducer";
export default combineReducers({
    foods:foodReducer
})