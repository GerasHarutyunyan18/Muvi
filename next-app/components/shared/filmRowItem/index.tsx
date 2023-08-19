import Link from "next/link";
import styles from "./filmRowItem.module.scss";

interface FilmRowItemProps {
  film: any;
}

export default function FilmRowItem({ film }: FilmRowItemProps) {
  return (
    <Link href={''} style={{textDecoration: 'none'}}>
      <div className={styles.container}>
        <img src={film.image} width={"20%"} />
        <p>{film.name}</p>
      </div>
    </Link>
  );
}
