import {create} from "zustand";
import { api } from "../api/api"

export const useMessageStore = create((set) => ({
    messages: [],
    getMessages: async (own = false) => {
        try {
            const res = own 
                ? await api.getMyMessages() 
                : await api.getMessages()
            set({ messages: res.data})
        } catch (error) {
            console.error(error)
        }
    }
}))