import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://api.kitek-pg.ru/api/feedback/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

const registerUser = async (user) => {
    const res = apiInstance.post("/auth/register", user)
    return res
}

const loginUser = async (user) => {
    const res = apiInstance.post("/auth/login", user)
    return res
}

const getMessages = async () => {
    const res = apiInstance.get("/messages")
    return res
}

export const api = {
    loginUser,
    registerUser,
    getMessages
}