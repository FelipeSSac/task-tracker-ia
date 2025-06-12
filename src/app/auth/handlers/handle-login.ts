import { LoginFormData } from "@/lib/schemas/login";
import { toast } from "sonner";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const handleLogin = (
  login: (email: string, password: string) => Promise<void>,
  setIsLoading: (isLoading: boolean) => void,
  router: AppRouterInstance,
  setActiveTab: (activeTab: "login" | "signup") => void
) => {
  return async (data: LoginFormData) => {
    try {
      setIsLoading(true);

      await login(data.email, data.password);

      toast.success("Successfully logged in!");

      setActiveTab("login");

      router.push("/board");
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
};

export { handleLogin };
