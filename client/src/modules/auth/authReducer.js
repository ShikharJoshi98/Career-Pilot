import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CLEAR_AUTH_STATE
} from "./authTypes";

const initialState = {
    user: null,
    registerLoading: false,
    error: null,
    message: null,
    isAuthenticated: false
};

export const authReducer = (
    state = initialState,
    action
) => {

    switch (action.type) {

        case REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
                error: null,
                message: null
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                registerLoading: false,
                user: action.payload.data,
                message: action.payload.message,
                error: null
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                registerLoading: false,
                error: action.payload,
                message: null
            };

        case CLEAR_AUTH_STATE:
            return {
                ...state,
                error: null,
                message: null
            };

        default:
            return state;
    }
};