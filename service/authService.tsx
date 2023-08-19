import { LocalStorage } from "../constants/keys";
import { axiosInstance } from "./axiosService";
import { SHA256 } from "crypto-js";

interface LoginProps {
  email: string | undefined;
  password: string | undefined;
}

interface SignupProps {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export const AuthService = {
  isLoggedIn: async (token: string) => {
    try {
      const res = await axiosInstance.get(
        `api/user/isLoggedIn/?token=${token}`
      );

      return res.data;
    } catch (err) {
      console.log("error:", err);
    }
  },
  login: async ({ email, password }: LoginProps) => {
    try {
      const hashedPassword = SHA256(password as string).toString();

      const data = {
        email,
        password: hashedPassword,
      };
      console.log("login data ==", data);
      const res = await axiosInstance.post("api/user/login/", data);

      return res.data;
    } catch (err) {
      console.log("error:", err);
    }
  },
  logout: async ({ email }: LoginProps) => {
    try {
      const data = {
        email,
      };

      console.log("login data ==", data);
      const res = await axiosInstance.post("api/user/logout/", data);
      if (res.data.success) {
        localStorage.removeItem(LocalStorage.AUTH);
      }
    } catch (err) {
      console.log("error:", err);
    }
  },
  signup: async ({ name, surname, email, password }: SignupProps) => {
    try {
      const hashedPassword = SHA256(password as string).toString();

      const data = {
        name,
        surname,
        email,
        password: hashedPassword,
      };

      const res = await axiosInstance.post("api/user/signup/", data);

      return res;
    } catch (err) {
      console.log("error:", err);
    }
  },
};
