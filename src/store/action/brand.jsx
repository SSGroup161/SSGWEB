import axios from "axios";

let url = import.meta.env.VITE_REACT_APP_API_KEY;

export const getBrand = async (dispatch, id) => {
    try {
        dispatch({ type: "GET_BRAND_PENDING" });
        const result = await axios.get(url + `brand/${id}`);
        dispatch({ payload: result.data.data, type: "GET_BRAND_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "GET_BRAND_FAILED" });
    }
};
