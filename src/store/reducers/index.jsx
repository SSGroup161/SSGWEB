import { combineReducers } from "redux";
import getBrandReducers from "./getBrandData";
import postContactData from "./postContactData";
import getArticleReducers from "./getArticleData";
import getArticleIdReducers from "./getArticleDataId";

const rootReducers = combineReducers({
    brand: getBrandReducers,
    contact: postContactData,
    article: getArticleReducers,
    articleid: getArticleIdReducers,
});

export default rootReducers;
