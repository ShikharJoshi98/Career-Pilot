import { post } from "../../api/apiClient"

export const registerUser = (data) => {
    return post("/auth/register", data);
}

export const loginUser = (data) => {
    return post("/auth/login", data);
}