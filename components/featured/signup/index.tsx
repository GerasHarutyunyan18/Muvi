import { useContext, useState } from "react";
import { AuthService } from "../../../service/authService";
import styles from "./signup.module.scss";
import { useRouter } from "next/router";
import { NotificationContext } from "../../../contexts/notification/notification";
import Link from "next/link";

export default function SingupPage() {
  const [name, setName] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const Notification = useContext(NotificationContext);

  const router = useRouter();

  const handleSubmit = async () => {
    const res = await AuthService.signup({ name, surname, email, password });
    if (res?.data) {
      router.push("/login");
      Notification?.Notification(
        "You have been successfully registered.",
        3000,
        true
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Sign up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(el) => {
            setName(el.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(el) => {
            setSurname(el.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(el) => {
            setEmail(el.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(el) => {
            setPassword(el.target.value);
          }}
        />
        <input type="password" placeholder="Password Repeat" />
        <button className={styles.loginButton} onClick={handleSubmit}>
          Sign up
        </button>
        <p className={styles.footerText}>
          Has not account yet? <Link href="/login">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
