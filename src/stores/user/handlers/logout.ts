import { account } from "@/lib/client/api/account";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";

const handleLogout = async () => {
  try {
    await account.deleteSession("current");
    return { success: true };
  } catch (error) {
    throw new AuthError(getErrorMessage(error));
  }
};

export { handleLogout };
