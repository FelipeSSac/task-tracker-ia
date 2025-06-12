import { SignupFormData } from "@/lib/schemas/signup";
import { toast } from "sonner";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const handleRegister = (
  register: (name: string, email: string, password: string) => Promise<void>,
  setIsLoading: (isLoading: boolean) => void,
  router: AppRouterInstance,
  setActiveTab: (activeTab: "login" | "signup") => void
) => {
  return async (data: SignupFormData) => {
    try {
      setIsLoading(true);

      await register(data.name, data.email, data.password);
      toast.success("Account created successfully!");

      setActiveTab("login");

      router.push("/board");
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
};

export { handleRegister };
