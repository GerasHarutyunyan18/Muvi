import { BasketProps } from "./types";
import closeIcon from "../../../public/icons/closeIcon.svg";

import styles from "./basket.module.scss";
import Image from "next/image";
import Button from "../button";

export default function Basket({ open, onClose }: BasketProps) {
  return (
    <div className={`${styles.container} ${open && styles.show}`}>
      <div className={styles.header}>
        <h2>My Basket</h2>
        <Image
          onClick={onClose}
          className={styles.closeImg}
          src={closeIcon}
          width={30}
          height={30}
          alt=""
        />
      </div>
      <hr />
      <Button text="Clear" className={styles.purchaseBtn} />
    </div>
  );
}
