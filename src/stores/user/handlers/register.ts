import { ID, account } from "@/lib/server";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";
import { Models } from "appwrite";

const handleRegister = (
  setUser: (user: Models.User<Models.Preferences> | null) => void
) => {
  return async (name: string, email: string, password: string) => {
    try {
      const id = ID.unique();

      const user = await account.create(id, email, password, name);

      setUser(user);
    } catch (error) {
      // throw new AuthError(getErrorMessage(error));
      console.error(error);
    }
  };
};

export { handleRegister };
