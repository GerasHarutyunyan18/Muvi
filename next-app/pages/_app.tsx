import { useContext, useEffect } from "react";
import Header from "../components/shared/header";
import { NotificationProvider } from "../contexts/notification/notification";
import { ThemeProvider } from "../contexts/themeMode/themeMode";
import { UserContext, UserProvider } from "../contexts/user/user";
import "../styles/globals.scss";
import { AuthService } from "../service/authService";

function App({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationProvider>
          <Header />
          <Component {...pageProps} />
        </NotificationProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
