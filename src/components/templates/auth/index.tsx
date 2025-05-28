import { Card, CardContent, CardHeader } from "@/components/atoms/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs";
import { LoginForm } from "@/components/organisms/login-form";
import { SignupForm } from "@/components/organisms/signup-form";
import { Logo } from "@/components/atoms/logo";
import { AuthProps } from "./props";

const Auth = ({
  onLogin,
  onRegister,
  isLoading,
  activeTab,
  onTabChange,
}: AuthProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
        <CardHeader>
          <Logo />
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={(value) => onTabChange(value as "login" | "signup")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 bg-white/10 border-white/20">
              <TabsTrigger
                value="login"
                className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white"
                disabled={isLoading}
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white"
                disabled={isLoading}
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-4 mt-6">
              <LoginForm onSubmit={onLogin} isLoading={isLoading} />
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 mt-6">
              <SignupForm onSubmit={onRegister} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export { Auth };
