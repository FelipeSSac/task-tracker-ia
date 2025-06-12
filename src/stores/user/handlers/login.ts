import { account } from "@/lib/server";
import { Models } from "node-appwrite";

const handleLogin = (
  setUser: (user: Models.User<Models.Preferences> | null) => void
) => {
  return async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
    } catch (error) {
      // throw new AuthError(getErrorMessage(error));
      console.error(error);
    }
  };
};

export { handleLogin };
