import { LoginFormData } from "@/lib/schemas/login";

export interface LoginFormProps {
  isLoading?: boolean;
  onSubmit: (data: LoginFormData) => Promise<void>;
}
