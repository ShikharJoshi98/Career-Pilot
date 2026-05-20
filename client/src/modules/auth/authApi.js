import { post } from "../../api/apiClient";

export const registerUser = (credentials) =>
    post("/auth/register", credentials);

export const loginUser = (credentials) =>
    post("/auth/login", credentials);
