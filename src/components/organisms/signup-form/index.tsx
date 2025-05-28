import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { SignupFormProps } from "./props";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData, signupSchema } from "@/lib/schemas/signup";

const SignupForm = ({ isLoading, onSubmit }: SignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white/90">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-white/60" />
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            {...register("name")}
          />
        </div>
        {errors.name && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white/90">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-white/60" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white/90">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-white/60" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-white/60 hover:text-white/80"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
};

export { SignupForm };
