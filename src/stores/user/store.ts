import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type UserInterface } from "./interface";
import { handleLogin } from "./handlers/login";
import { handleRegister } from "./handlers/register";
import { handleLogout } from "./handlers/logout";
import { handleFetchUser } from "./handlers/fetch-user";

const useUserStore = create<UserInterface>()(
  persist(
    (set) => ({
      user: null,

      setLoggedInUser: (user) => set({ user }),

      login: async (email: string, password: string) => {
        const { user } = await handleLogin(email, password);
        set({ user });
        return { success: true };
      },

      register: async (name: string, email: string, password: string) => {
        const { user } = await handleRegister(name, email, password);
        set({ user });
        return { success: true };
      },

      logout: async () => {
        await handleLogout();
        set({ user: null });
        return { success: true };
      },

      fetchUser: async () => {
        const user = await handleFetchUser();
        set({ user });
      },
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
