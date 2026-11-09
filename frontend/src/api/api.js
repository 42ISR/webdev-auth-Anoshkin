import axios from "axios";
import {useUserStore} from "../store/useUserStore"

const apiInstance = axios.create({
    baseURL: "https://api.kitek-pg.ru/api/feedback/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

apiInstance.interceptors.request.use(config => {
    const {user} = useUserStore.getState()

    if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
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

const sendMessage = async (messages) => {
    const res = apiInstance.post("/messages", messages)
    return res
}

const getMyMessages = async () => {
    const res = await apiInstance.get("/my-messages")
} 

const getStats = async () => {
    const res = await apiInstance.get("/stats")
}

const authMe = async () => {
    const res = await apiInstance.get(`/auth/me`)
}

const reportMessage = async (id) => {
    const res = await apiInstance.get(`/messages/${id}/report`)
}

const likeMessage = async (id) => {
    const res = await apiInstance.get(`/messages/${id}/like`)
}

const deleteMessage = async (id) => {
    const res = apiInstance.delete(`/messages/${id}`)
    return res
}

export const api = {
    loginUser,
    registerUser,
    getMessages,
    sendMessage,
    getMyMessages,
}