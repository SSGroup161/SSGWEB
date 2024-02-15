import axios from "axios";
import Cookies from "js-cookie";

let url = import.meta.env.VITE_REACT_APP_API_KEY;

export const getArticle = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ARTICLE_PENDING" });
        const result = await axios.get(url + `/article/`);
        dispatch({ payload: result.data.data, type: "GET_ARTICLE_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "GET_ARTICLE_FAILED" });
    }
};

export const getArticleId = (id) => async (dispatch) => {
    try {
        dispatch({ type: "GET_ARTICLE_ID_PENDING" });
        const result = await axios.get(url + `/article/` + id);
        dispatch({ payload: result.data.data, type: "GET_ARTICLE_ID_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "GET_ARTICLE_ID_FAILED" });
    }
};

export const postArticle = (data) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${Cookies.get("token")}`,
        };

        dispatch({ type: "POST_ARTICLE_PENDING" });
        const result = await axios.post(url + "article", data, { headers });
        console.log(result);
        dispatch({ payload: result.data.data, type: "POST_ARTICLE_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        const errorMessage =
            err.response && err.response.data
                ? err.response.data.message
                : err.message;
        dispatch({
            payload: errorMessage,
            type: "POST_ARTICLE_FAILED",
        });
    }
};

export const deleteArticle = (id) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${Cookies.get("token")}`,
        };

        dispatch({ type: "DELETE_ARTICLE_PENDING" });
        const result = await axios.delete(url + `/article/${id}`, { headers });
        console.log(result);
        dispatch({ payload: result.data.data, type: "DELETE_ARTICLE_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({
            payload: err.response.data.message,
            type: "DELETE_ARTICLE_FAILED",
        });
    }
};
