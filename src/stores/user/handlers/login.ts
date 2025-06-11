import { createSessionClient } from "@/lib/server";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";

const handleLogin = async (email: string, password: string) => {
  try {
    const { account } = await createSessionClient();

    await account.createEmailPasswordSession(email, password);
    const user = await account.get();

    return { user, success: true };
  } catch (error) {
    throw new AuthError(getErrorMessage(error));
  }
};

export { handleLogin };
