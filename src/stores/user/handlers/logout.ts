import { account } from "@/lib/client/api/account";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleLogout = (router: AppRouterInstance) => {
  return async () => {
    try {
      await account.deleteSession("current");
      router.push("/auth");
    } catch (error) {
      throw new AuthError(getErrorMessage(error));
    }
  };
};
