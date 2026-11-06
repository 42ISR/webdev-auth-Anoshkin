import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore =create()(persist((set) => ({
    user: undefined,
    setUser: (user) => {
        set({user})
    },
    clearUser: () => {
        set({user: undefined})
    },
    }),
    {
        name: "user-storage",
        storage: createJSONStorage(() => localStorage),
    },
),
)


