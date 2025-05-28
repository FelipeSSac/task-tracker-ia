"use client";

import useUserStore from "@/stores/user/store";
import { useRouter } from "next/navigation";
import { Auth } from "@/components/templates/auth";
import { LoginFormData } from "@/lib/schemas/login";
import { useState } from "react";
import { toast } from "sonner";
import { SignupFormData } from "@/lib/schemas/signup";

const AuthPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const login = useUserStore((state) => state.login);
  const register = useUserStore((state) => state.register);

  const handleLogin = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const { success } = await login(data.email, data.password);
      if (success) {
        toast.success("Successfully logged in!");
        router.push("/board");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to login. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data: SignupFormData) => {
    try {
      setIsLoading(true);
      const { success } = await register(data.name, data.email, data.password);
      if (success) {
        toast.success("Account created successfully!");
        router.push("/board");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to create account. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Auth
      onLogin={handleLogin}
      onRegister={handleRegister}
      isLoading={isLoading}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};

export default AuthPage;
