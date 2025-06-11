import { createSessionClient } from "@/lib/server";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";

const handleLogout = async () => {
  try {
    const { account } = await createSessionClient();

    await account.deleteSession("current");
    return { success: true };
  } catch (error) {
    throw new AuthError(getErrorMessage(error));
  }
};

export { handleLogout };
