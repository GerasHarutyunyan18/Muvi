import { HeaderItems } from "../../../constants/header";
import HeaderItem from "../headerItem";
import styles from "./header.module.scss";
import basketIcon from "../../../public/icons/basketIcon.svg";
import basketIconWhite from "../../../public/icons/basketIconWhite.svg";

import lampOnIcon from "../../../public/icons/lampOn.svg";
import lampOffIcon from "../../../public/icons/lampOff.svg";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/themeMode/themeMode";
import Basket from "../basket";
import { UserContext } from "../../../contexts/user/user";
import UserCard from "../userCard";
import { FilmService } from "../../../service/filmService";
import FilmRowItem from "../filmRowItem";
import LoadingSpinner from "../loadingSpinner";

export default function Header() {
  const Theme = useContext(ThemeContext);
  const [basketOpen, setBasketOpen] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  const [search, setSearch] = useState<string>();
  const [searchResult, setSearchResult] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    userContext?.isLoggedIn();
  }, []);

  const handleModeChange = (): void => {
    Theme?.changeMode(!Theme?.isLight);
  };

  const basketToggler = (): void => {
    setBasketOpen(!basketOpen);
  };

  const handleBasketClose = (): void => {
    setBasketOpen(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    const res = await FilmService.getFilms({ name: search });
    if (res.success) {
      setSearchResult(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <div className={`${styles.header} ${!Theme?.isLight && styles.darkHeader}`}>
      <div className={styles.left}>
        <div className={styles.links}>
        {HeaderItems.map((item, index) => (
          <HeaderItem
            key={index}
            headerItem={item}
            className={!Theme?.isLight ? styles.darkLink : ""}
          />
        ))}
        </div>
        <div className={styles.search}>
          <input
          placeholder="Search film..."
          className={styles.searchInput}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {search && (
            <div className={styles.searchResContainer}>
              {loading ? (
                <LoadingSpinner size={30} color="var(--purple_450)" />
              ) : searchResult?.length ? (
                <div className={styles.searchResult}>
                  {searchResult?.map((el: any, index: number) => {
                    return <FilmRowItem key={index} film={el} />;
                  })}
                </div>
              ) : <p className={styles.notFound}>Not found</p>}
            </div>
          )}
        </div>
      </div>
      <div className={styles.right}>
        {/* <div className={styles.basketBtn} onClick={basketToggler}>
          <Image
            src={Theme?.isLight ? basketIcon : basketIconWhite}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <Basket open={basketOpen} onClose={handleBasketClose} /> */}
        <div className={styles.modeBtn} onClick={handleModeChange}>
          <Image
            src={Theme?.isLight ? lampOffIcon : lampOnIcon}
            width={30}
            height={30}
            alt=""
          />
        </div>
        <UserCard />
      </div>
    </div>
  );
}
