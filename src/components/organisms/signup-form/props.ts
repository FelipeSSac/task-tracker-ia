import { SignupFormData } from "@/lib/schemas/signup";

export interface SignupFormProps {
  isLoading?: boolean;
  onSubmit: (data: SignupFormData) => Promise<void>;
}
