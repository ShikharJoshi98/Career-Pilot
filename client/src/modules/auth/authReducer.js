import { authTypes } from "./authTypes";

const initialState = {
    message: null,
    error: null,
    loading: false,
    user: null,
    isAuthenticated: false,
    authAction: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null,
                authAction: null
            };
        case authTypes.REGISTER_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                user: null,
                loading: false,
                error: null,
                authAction: "register-success"
            };
        case authTypes.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message: null,
                authAction: null
            };
        case authTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null,
                authAction: null
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                user: action.payload.data,
                isAuthenticated: true,
                loading: false,
                error: null,
                authAction: "login-success"
            };
        case authTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message: null,
                authAction: null
            };
        case authTypes.CLEAR_AUTH_STATE:
            return {
                ...state,
                message: null,
                error: null,
                authAction: null
            };
        default:
            return state;
    }
}