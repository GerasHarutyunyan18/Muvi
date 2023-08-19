import React, { ReactNode, createContext, useEffect, useState } from "react";
import { AuthService } from "../../service/authService";
import { userService } from "../../service/userService";
import { User } from "../../constants/types";
import { LocalStorage } from "../../constants/keys";

interface ContextProps {
  isLoggedIn: () => Promise<boolean>;
  user: User | undefined;
}

export const UserContext = createContext<ContextProps | null>(null);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>();

  const isLoggedIn = async () => {
    const token = window?.localStorage.getItem(LocalStorage.AUTH);
    if (token) {
      const res = await AuthService.isLoggedIn(token);
      if (res) {
        const tmpUser = await userService.getUserById(res.user);
        setUser(tmpUser.data);
      }
    }
    return false;
  };

  const contextValue: ContextProps = {
    isLoggedIn,
    user,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
