const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const postContactData = (state = initialState, action) => {
    if (action.type === "POST_CONTACT_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "POST_CONTACT_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "POST_CONTACT_FAILED") {
        return {
            ...state,
            data: null,
            errorMessage: action.payload,
            isLoading: false,
            isError: true,
        };
    } else {
        return state;
    }
};

export default postContactData;
