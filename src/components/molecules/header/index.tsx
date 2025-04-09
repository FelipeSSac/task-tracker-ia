"use client";

import Button from "@/components/atoms/button";
import useUserStore from "@/stores/user/store";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout)(router);

  const initials = user?.name
    .split(" ")
    .map((name) => name[0]?.toUpperCase())
    .join("");

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">Task Tracker AI</h1>
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold">
          {initials}
        </div>
        <Button onClick={logout}>Logout</Button>
      </div>
    </header>
  );
};

export default Header;
