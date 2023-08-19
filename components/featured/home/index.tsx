import { useContext } from "react";
import FilmList from "../../shared/filmsList";
import styles from "./home.module.scss";
import { ThemeContext } from "../../../contexts/themeMode/themeMode";
import { UserContext } from "../../../contexts/user/user";

export default function HomePage() {
  const Theme = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${!Theme?.isLight && styles.dark}`}>
      <FilmList />
    </div>
  );
}
