import { createSessionClient } from "@/lib/server";

const handleFetchUser = async () => {
  try {
    const { account } = await createSessionClient();

    const user = await account.get();
    return user;
  } catch (error) {
    return null;
  }
};

export { handleFetchUser };
