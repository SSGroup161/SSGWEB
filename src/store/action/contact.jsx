import axios from "axios";

let url = import.meta.env.VITE_REACT_APP_API_KEY;

export const postContact = (data) => async (dispatch) => {
    try {
        dispatch({ type: "POST_CONTACT_PENDING" });
        const result = await axios.post(url + `/contact`, data, {
            name: data.get("name"),
            email: data.get("email"),
            message: data.get("message"),
        });
        dispatch({ payload: result.data.data, type: "POST_CONTACT_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        console.log("data form", data);
        dispatch({ payload: err.response, type: "POST_CONTACT_FAILED" });
    }
};
