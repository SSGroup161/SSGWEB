import { combineReducers } from "redux";
import getBrandReducers from "./getBrandData";
import postContactData from "./postContactData";
import getArticleReducers from "./getArticleData";
import getArticleIdReducers from "./getArticleDataId";
import postArticleData from "./postArticle";
import loginReducers from "./login";
import deleteArticleReducers from "./deleteArticle";
import putArticleReducers from "./updateArticle";

const rootReducers = combineReducers({
    brand: getBrandReducers,
    contact: postContactData,
    article: getArticleReducers,
    articleid: getArticleIdReducers,
    addarticle: postArticleData,
    auth: loginReducers,
    deletearticle: deleteArticleReducers,
    putArticle: putArticleReducers,
});

export default rootReducers;
