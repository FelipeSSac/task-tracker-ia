"use client";

import { useState, FormEvent } from "react";
import { Field, Fieldset, Input, Label, Legend } from "@headlessui/react";
import clsx from "clsx";
import Button from "@/components/atoms/button";
import useUserStore from "@/stores/user/store";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const login = useUserStore((state) => state.login)(router);
  const register = useUserStore((state) => state.register)(router);

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      await login(email, password);
      return;
    }

    await register(name, email, password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <form className="w-full max-w-lg px-4" onSubmit={onSubmit}>
        <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
          <Legend
            className={clsx(
              "text-lg font-bold text-white flex items-end justify-center gap-2"
            )}
          >
            Task Tracker IA
          </Legend>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Email</Label>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          {!isLogin ? (
            <Field>
              <Label className="text-sm/6 font-medium text-white">Name</Label>
              <Input
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
          ) : null}
          <Field>
            <Label className="text-sm/6 font-medium text-white">Password</Label>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <Field className="flex justify-end items-center gap-2">
            <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
            <Button
              type="button"
              onClick={() => setIsLogin((prevState) => !prevState)}
            >
              {isLogin ? "Register" : "Login"}
            </Button>
          </Field>
        </Fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
