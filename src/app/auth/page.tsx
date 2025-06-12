"use client";

import useUserStore from "@/stores/user/store";
import { useRouter } from "next/navigation";
import { Auth } from "@/components/templates/auth";
import { useState } from "react";
import { handleLogin } from "./handlers/handle-login";
import { handleRegister } from "./handlers/handle-register";

const AuthPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const login = useUserStore((state) => state.login);
  const register = useUserStore((state) => state.register);

  return (
    <Auth
      onLogin={handleLogin(login, setIsLoading, router, setActiveTab)}
      onRegister={handleRegister(register, setIsLoading, router, setActiveTab)}
      isLoading={isLoading}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};

export default AuthPage;
