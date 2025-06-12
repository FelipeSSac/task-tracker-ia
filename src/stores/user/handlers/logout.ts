import { account } from "@/lib/server";
import { Models } from "node-appwrite";

const handleLogout = (
  setUser: (user: Models.User<Models.Preferences> | null) => void
) => {
  return async () => {
    try {
      await account.deleteSession("current");

      setUser(null);
    } catch (error) {
      // throw new AuthError(getErrorMessage(error));
      console.error(error);
    }
  };
};

export { handleLogout };
