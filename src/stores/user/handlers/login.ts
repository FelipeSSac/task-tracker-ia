import { account } from "@/lib/client/api/account";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const handleLogin = (router: AppRouterInstance) => {
  return async (email: string, password: string) => {
    try {
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

export { handleLogin };