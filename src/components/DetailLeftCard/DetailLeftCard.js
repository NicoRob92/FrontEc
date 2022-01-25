import React from "react";
import styles from "./_DetailLeftCard.module.scss";

const DetailLeftCard = ({ productById }) => {
  return (
    <div className={`card ${styles.card_wrapper}`}>
      <div className={`card ${styles.product_imgs}`}>
        <div className={styles.img_display}>
          <div className={styles.img_showcase}>
            <img src={productById.images} alt={productById.name} />
          </div>
        </div>

        <div className={styles.img_select}>
          {productById.images?.map((image) => (
            <div className={styles.img_item}>
              <img src={image} alt={productById.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailLeftCard;
