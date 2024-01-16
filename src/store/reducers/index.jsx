import { combineReducers } from "redux";
import getBrandReducers from "./getBrandData";
import postContactData from "./postContactData";

const rootReducers = combineReducers({
    brand: getBrandReducers,
    contact: postContactData,
});

export default rootReducers;
