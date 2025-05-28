import { LoginFormData, SignupFormData } from "@/lib/schemas/login";
import { Dispatch, SetStateAction } from "react";

export interface AuthProps {
  onLogin: (data: LoginFormData) => Promise<void>;
  onRegister: (data: SignupFormData) => Promise<void>;
  isLoading: boolean;
  activeTab: "login" | "signup";
  onTabChange: Dispatch<SetStateAction<"login" | "signup">>;
}
