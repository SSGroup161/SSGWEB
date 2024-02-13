import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { notification } from "antd";

let url = import.meta.env.VITE_REACT_APP_API_KEY;

export const login = (data, navigate) => async (dispatch) => {
    const openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message,
            description,
        });
    };

    try {
        dispatch({ type: "AUTH_LOGIN_PENDING" });

        const response = await axios.post(`${url}auth/login`, data);

        if (response.data.token && response.data.data) {
            Cookies.set("token", response.data.token, { expires: 7 });

            dispatch({
                type: "AUTH_LOGIN_SUCCESS",
                payload: response.data.data || {},
            });

            navigate(`/auth/${response.data.data.id}`);
        } else {
            throw new Error("Token or user data not found in response");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        openNotificationWithIcon(
            "error",
            "Something Wrong",
            error.response?.data?.message || "An unexpected error occurred"
        );
        dispatch({
            type: "AUTH_LOGIN_FAILED",
            payload:
                error.response?.data?.message || "An unexpected error occurred",
        });
    }
};
