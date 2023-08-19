import Link from "next/link";
import styles from "./headerItem.module.scss";
import { HeaderItemProps } from "./types";

export default function HeaderItem({ headerItem, className }: HeaderItemProps) {
  return (
    <div className={styles.headerItem}>
      <Link className={`${styles.link} ${className}`} href={headerItem?.link}>
        {headerItem.text}
      </Link>
    </div>
  );
}
