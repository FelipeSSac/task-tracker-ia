import { account, ID } from "@/client/api";
import { create } from "zustand";
import UserInterface from "./interface";

const useUserStore = create<UserInterface>((set) => ({
  user: null,

  setLoggedInUser: (user) => set({ user }),

  login: async (email, password) => {
    await account.createEmailPasswordSession(email, password);

    const user = await account.get();
    set({ user });
  },

  register: async (name, email, password) => {
    const id = ID.unique();

    await account.create(id, email, password, name);
    await account.createEmailPasswordSession(email, password);

    const user = await account.get();
    set({ user });
  },

  logout: async () => {
    await account.deleteSession("current");

    set({ user: null });
  },

  fetchUser: async () => {
    try {
      const user = await account.get();

      set({ user });
    } catch (error) {
      set({ user: null });
    }
  },
}));

export default useUserStore;
