import { account } from "@/lib/client/api/account";
import { ID } from "@/lib/client/api";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const handleRegister = (router: AppRouterInstance) => {
  return async (name: string, email: string, password: string) => {
    try {
      const id = ID.unique();
      await account.create(id, email, password, name);
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
      return user;
    } catch (error) {
      throw new AuthError(getErrorMessage(error));
    }
  };
};

export { handleRegister };
