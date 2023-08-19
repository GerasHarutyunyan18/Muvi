import { useEffect, useState } from "react";
import { Product } from "../../../constants/types";
import { FilmService } from "../../../service/filmService";
import ProductCard from "../filmCard";
import styles from "./productList.module.scss";
import FilmCard from "../filmCard";

export default function FilmList() {
  const [filmList, setFilmList] = useState<{ category: string }[]>([]);
  const fetchFilms = async (limit: number, offset: number) => {
    const data = await FilmService.getFilms({limit, offset});
    setFilmList(data.data);
    console.log("films", data);
  };

  useEffect(() => {
    fetchFilms(10, 0);
  }, []);
  
  console.log("film list in var = ", filmList);
  return (
    <div className={styles.container}>
      {filmList.map((el: any) => (
        <div className={styles.productItem} key={el.id}>
          <FilmCard key={el.id} film={el} />
        </div>
      ))}
    </div>
  );
}
