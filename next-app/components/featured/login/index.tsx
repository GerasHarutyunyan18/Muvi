import { useContext, useState } from "react";
import styles from "./loginPage.module.scss";
import { useRouter } from "next/router";
import { AuthService } from "../../../service/authService";
import { NotificationContext } from "../../../contexts/notification/notification";
import { UserContext } from "../../../contexts/user/user";
import Loading from "../../shared/loadingSpinner";
import { LocalStorage } from "../../../constants/keys";

export default function LoginPage() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const Notification = useContext(NotificationContext);
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!email) {
      Notification?.Notification("Email can not be empty.", 3000, false);
      return;
    }
    if (!password) {
      Notification?.Notification("Password can not be empty.", 3000, false);
      return;
    }
    setLoading(true);
    const res = await AuthService.login({ email, password });
    if (res?.token) {
      router.push("/home");
      window?.localStorage.setItem(LocalStorage.AUTH, res.token);
      Notification?.Notification(
        "You have been successfully Logged in.",
        3000,
        true
      );
      userContext?.isLoggedIn();
    } else {
      Notification?.Notification("Email or password are wrong.", 3000, false);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(el) => {
            setEmail(el.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(el) => {
            setPassword(el.target.value);
          }}
        />

        <button
          className={styles.loginButton}
          onClick={handleSubmit}
          style={{ background: loading ? "white" : "" }}
        >
          {loading ? <Loading size={10} color="var(--purple_450)" /> : "Log in"}
        </button>
        <p className={styles.footerText}>
          Has not account yet? <a>Sign Up</a>
        </p>
      </div>
    </div>
  );
}
