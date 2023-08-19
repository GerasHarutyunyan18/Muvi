import { filmCardProps } from "./types";
import styles from "./filmCard.module.scss";
import Image from "next/image";
import { NotificationContext } from "../../../contexts/notification/notification";
import { useContext } from "react";
import Button from "../button";
import BasketIcon from "../../../public/icons/basketIcon.svg";
import fireIcon from "../../../public/icons/fireEmptyIcon.svg";
import fireIconFilled from "../../../public/icons/fireIcon.svg";
import heartEmptyIcon from "../../../public/icons/heartEmptyIcon.svg";
import heartFilledIcon from "../../../public/icons/heartFilledIcon.svg";
import starFilledIcon from "../../../public/icons/starFilledIcon.svg";
import starEmptyIcon from "../../../public/icons/starEmptyIcon.svg";

import { ThemeContext } from "../../../contexts/themeMode/themeMode";
import { truncateText } from "../../../constants/utils";

export default function FilmCard({ film }: filmCardProps) {
  const Theme = useContext(ThemeContext);

  const Notification = useContext(NotificationContext);
  console.log(Notification);
  const handleCopy = () => {
    const textToCopy = film?.id.toString();
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => Notification?.Notification("Successfully copied", 3000, true))
      .catch((error) =>
        Notification?.Notification("Failed to copy", 3000, false)
      );
  };

  return (
    <div
      className={`${styles.container} ${
        !Theme?.isLight && styles.darkContainer
      }`}
    >
      <img
        className={styles.img}
        src={film.image}
        alt={""}
      />
      {/* <div className={styles.reactions}>
        <div className={styles.reactionItem}>
          <Image src={fireIconFilled} alt="" width={40} height={40} />
          <span>9</span>
        </div>
        <div className={styles.reactionItem}>
          <Image src={heartEmptyIcon} alt="" width={40} height={40} />
          <span>23</span>
        </div>
        <div className={styles.reactionItem}>
          <Image src={starEmptyIcon} alt="" width={40} height={40} />
          <span>11</span>
        </div>
      </div> */}
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.name}>{truncateText(film.name, 15)}</p>
          <span onClick={handleCopy} className={styles.prodId}>
            #{film.id}
          </span>
        </div>
        {/* {product.sale && (
          <>
            <div className={styles.saleSection}>
              <p>Sale {product.sale.percent}%</p>
            </div>
          </>
        )} */}
        {/* <div className={styles.pricing}>
          {product.sale ? (
            <span className={styles.discountedPrice}>
              {product.sale.discountedPrice} /{" "}
              <span className={styles.mainPrice}>{product.price}&nbsp;</span>{" "}
              AMD
            </span>
          ) : (
            <span className={styles.discountedPrice}>{product.price} AMD</span>
          )}
        </div> */}
        {/* <select className={styles.sizeSelect}>
          <option defaultChecked>Size</option>
          {product.avialableSizes.map((el: number) => {
            return <option>{el}</option>;
          })}
        </select> */}
        <div className={styles.footerBtn}>
          <Button text="Watch" className={styles.buyNow} />
          <Button
            className={styles.basketBtn}
            icon={BasketIcon}
            iconWidth={15}
            iconHeight={15}
          />
        </div>
      </div>
    </div>
  );
}
