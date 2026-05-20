import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "./authTypes";
import { registerUser } from "./authApi";
import { registerFailure, registerSuccess } from "./authAction";

function* registerSaga(action) {
    try {
        const response = yield call(
            registerUser,
            action.payload
        );

        yield put(
            registerSuccess(response)
        );
    } catch (error) {
        yield put(
            registerFailure(error.message)
        );
    }
}

export default function* authSaga() {
    yield takeLatest(
        REGISTER_REQUEST,
        registerSaga
    )
}