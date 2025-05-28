import { account } from "@/lib/client/api/account";

const handleFetchUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    return null;
  }
};

export { handleFetchUser };
