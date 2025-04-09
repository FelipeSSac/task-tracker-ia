import { Models } from "appwrite";

interface UserInterface {
  user: Models.User<Models.Preferences> | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
  setLoggedInUser: (user: Models.User<Models.Preferences> | null) => void;
}

export default UserInterface;
