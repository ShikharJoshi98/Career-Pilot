import { combineReducers } from "redux";
import { authReducer } from "../../modules/auth/authReducer";

export default combineReducers(
    { auth: authReducer}
)