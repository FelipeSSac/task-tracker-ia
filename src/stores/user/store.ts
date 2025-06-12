import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type UserInterface } from "./interface";
import { handleLogin } from "./handlers/login";
import { handleRegister } from "./handlers/register";
import { handleLogout } from "./handlers/logout";
import { handleFetchUser } from "./handlers/fetch-user";
import { Models } from "appwrite";

const useUserStore = create<UserInterface>()(
  persist(
    (set) => {
      const setUser = (user: Models.User<Models.Preferences> | null) => {
        set({ user });
      };

      return {
        user: null,
        setUser,
        login: handleLogin(setUser),
        register: handleRegister(setUser),
        logout: handleLogout(setUser),
        fetchUser: handleFetchUser(setUser),
      };
    },
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
