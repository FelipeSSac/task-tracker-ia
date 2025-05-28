import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInterface } from "./interface";
import { handleLogin } from "./handlers/login";
import { handleRegister } from "./handlers/register";
import { handleLogout } from "./handlers/logout";
import { handleFetchUser } from "./handlers/fetch-user";

const useUserStore = create<UserInterface>()(
  persist(
    (set) => ({
      user: null,

      setLoggedInUser: (user) => set({ user }),

      login: (router) => {
        return async (email, password) => {
          const user = await handleLogin(router)(email, password);
          set({ user });
        };
      },

      register: (router) => {
        return async (name, email, password) => {
          const user = await handleRegister(router)(name, email, password);
          set({ user });
        };
      },

      logout: (router) => {
        return async () => {
          await handleLogout(router)();
          set({ user: null });
        };
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
