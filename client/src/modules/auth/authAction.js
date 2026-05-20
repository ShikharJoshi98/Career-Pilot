import * as types from "./authTypes";

export const registerRequest = (credentials) => {
    return {
        type: types.REGISTER_REQUEST,
        payload: credentials
    }
}

export const registerSuccess = (data) => {
    return {
        type: types.REGISTER_SUCCESS,
        payload: data
    }
}

export const registerFailure = (error) => {
    return {
        type: types.REGISTER_FAILURE,
        payload: error
    }
}

export const clearAuthState = () => {
    return {
        type: types.CLEAR_AUTH_STATE
    }
}