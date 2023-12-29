import { combineReducers } from "redux";
import getBrandReducers from "./getBrandData";

const rootReducers = combineReducers({
    brand: getBrandReducers,
});

export default rootReducers;
