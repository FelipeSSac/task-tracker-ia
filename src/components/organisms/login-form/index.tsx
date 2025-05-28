import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { LoginFormProps } from "./props";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/lib/schemas/login";

const LoginForm = ({ isLoading, onSubmit }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="Enter your password"
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
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};

export { LoginForm };
