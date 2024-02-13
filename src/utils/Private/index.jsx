import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

function decodeJwt(token) {
    const parts = token.split(".");
    if (parts.length !== 3) {
        throw new Error("JWT token yang diberikan tidak valid.");
    }

    const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = atob(payload);

    return JSON.parse(decodedPayload);
}

const Auth = ({ children }) => {
    const token = Cookies.get("token");
    const { id } = useParams();

    if (!token) {
        Cookies.remove("token");
        return <Navigate to="*" replace />;
    }

    try {
        const decoded = decodeJwt(token);

        if (decoded.users_Id.toString() !== id) {
            Cookies.remove("token");
            return <Navigate to="*" replace />;
        }
    } catch (error) {
        console.error("Error decoding token:", error);
        Cookies.remove("token");
        return <Navigate to="*" replace />;
    }

    return children;
};

export default Auth;
