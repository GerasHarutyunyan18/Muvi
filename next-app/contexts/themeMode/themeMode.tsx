import React, { ReactNode, createContext, useState } from "react";

interface ContextProps {
  changeMode: (value: boolean) => void;
  isLight: boolean;
}

export const ThemeContext = createContext<ContextProps | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isLight, setIsLight] = useState<boolean>(true);
  const changeMode = (value: boolean) => {
    setIsLight(value);
  };

  const contextValue: ContextProps = {
    changeMode,
    isLight,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
