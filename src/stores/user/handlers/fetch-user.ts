import { account } from "@/lib/server";
import { Models } from "node-appwrite";

const handleFetchUser = (
  setUser: (user: Models.User<Models.Preferences> | null) => void
) => {
  return async () => {
    try {
      const user = await account.get();

      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
};

export { handleFetchUser };
