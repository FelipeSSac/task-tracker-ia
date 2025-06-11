import { Models } from "appwrite";

interface UserInterface {
  user: Models.User<Models.Preferences> | null;
  login: (email: string, password: string) => Promise<{ success: boolean }>;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ success: boolean }>;
  logout: () => Promise<{ success: boolean }>;
  fetchUser: () => Promise<void>;
  setLoggedInUser: (user: Models.User<Models.Preferences> | null) => void;
}

export { type UserInterface };
