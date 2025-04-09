"use client";

import { account } from "@/client/api";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const userName = "John Doe";

  const initials = userName
    .split(" ")
    .map((name) => name[0]?.toUpperCase())
    .join("");

  const logout = async () => {
    await account.deleteSession("current");
    router.push("/auth"); // Redirect to the login page after logout
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">Task Tracker AI</h1>
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold">
          {initials}
        </div>
        <button
          onClick={logout}
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
