import axios from "axios";

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
            "Content-Type": "multipart/form-data",
        };
        dispatch({ type: "POST_ARTICLE_PENDING" });
        const result = await axios.post(`${url}article`, data, { headers });
        console.log(result);
        dispatch({ type: "POST_ARTICLE_SUCCESS", payload: result.data.data });
    } catch (err) {
        console.error("error", err);

        dispatch({
            type: "POST_ARTICLE_FAILED",
            payload: err.response ? err.response : { message: err.message },
        });
    }
};
