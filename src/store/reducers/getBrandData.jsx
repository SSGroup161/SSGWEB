const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const getBrandReducers = (state = initialState, action) => {
    if (action.type === "GET_BRAND_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "GET_BRAND_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "GET_BRAND_FAILED") {
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

export default getBrandReducers;
