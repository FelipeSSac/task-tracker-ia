import { Brain } from "lucide-react";
import { CardDescription, CardTitle } from "@/components/atoms/card";
import { LogoProps } from "./props";

const Logo = ({
  title = "Task Tracker IA",
  description = "Organize your projects with style and powered by AI",
}: LogoProps) => {
  return (
    <div className="text-center space-y-1">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
          <Brain className="h-8 w-8 text-white" />
        </div>
      </div>
      <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
      <CardDescription className="text-white/80">{description}</CardDescription>
    </div>
  );
};

export { Logo };
