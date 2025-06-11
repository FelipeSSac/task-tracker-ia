import { ID, createSessionClient } from "@/lib/server";
import { AuthError } from "@/lib/exception/auth-error";
import { getErrorMessage } from "./get-error-message";

const handleRegister = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const { account } = await createSessionClient();
    const id = ID.unique();

    await account.create(id, email, password, name);
    await account.createSession(email, password);

    const user = await account.get();

    return { user, success: true };
  } catch (error) {
    throw new AuthError(getErrorMessage(error));
  }
};

export { handleRegister };
