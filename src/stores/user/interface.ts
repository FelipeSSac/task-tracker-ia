import { Models } from "appwrite";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface UserInterface {
  user: Models.User<Models.Preferences> | null;
  login: (
    router: AppRouterInstance
  ) => (email: string, password: string) => Promise<void>;
  register: (
    router: AppRouterInstance
  ) => (name: string, email: string, password: string) => Promise<void>;
  logout: (router: AppRouterInstance) => () => Promise<void>;
  fetchUser: () => Promise<void>;
  setLoggedInUser: (user: Models.User<Models.Preferences> | null) => void;
}

export type { UserInterface };
