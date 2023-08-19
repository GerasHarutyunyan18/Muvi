import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/user/user";
import HeaderItem from "../headerItem";
import { User } from "../../../constants/types";

import styles from "./userCard.module.scss";
import Button from "../button";

export default function UserCard() {
  const [user, setUser] = useState<User>();
  const userContext = useContext(UserContext);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (userContext) {
      setUser(userContext.user);
    }
  }, [userContext?.user]);

  const handleClick = () => {
    setOpen(!open);
  };

  if (user) {
    return (
      <div className={styles.userCard}>
        <div className={styles.userBtn} onClick={handleClick}>
          <p>{user.name?.slice(0, 1).toUpperCase()}</p>
        </div>
        <div className={`${styles.infoCard} ${!open && styles.close}`}>
          <p className={styles.infoItem}>
            ID: <b>{user.id}</b>
          </p>
          <p className={styles.infoItem}>{user.name}</p>
          <p className={styles.infoItem}>{user.surname}</p>
          <p className={styles.infoItem}>{user.email}</p>
          <Button text="Log out" className={styles.logoutBtn}></Button>
        </div>
      </div>
    );
  }
  return <HeaderItem headerItem={{ text: "Log in", link: "/login" }} />;
}
