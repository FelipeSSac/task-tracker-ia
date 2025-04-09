import { create } from "zustand";
import { persist } from "zustand/middleware";
import UserInterface from "./interface";
import { account } from "@/client/api/account";
import { ID } from "@/client/api/";

const useUserStore = create<UserInterface>()(
  persist(
    (set) => ({
      user: null,

      setLoggedInUser: (user) => set({ user }),

      login: (router) => {
        return async (email, password) => {
          await account.createEmailPasswordSession(email, password);

          const user = await account.get();
          set({ user });
          localStorage.setItem("user", JSON.stringify(user));

          router.push("/");
        };
      },

      register: (router) => {
        return async (name, email, password) => {
          const id = ID.unique();

          await account.create(id, email, password, name);
          await account.createEmailPasswordSession(email, password);

          const user = await account.get();
          set({ user });
          localStorage.setItem("user", JSON.stringify(user));

          router.push("/");
        };
      },

      logout: (router) => {
        return async () => {
          await account.deleteSession("current");

          set({ user: null });

          router.push("/auth");
        };
      },

      fetchUser: async () => {
        try {
          const user = await account.get();

          set({ user });
        } catch (error) {
          set({ user: null });
        }
      },
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
