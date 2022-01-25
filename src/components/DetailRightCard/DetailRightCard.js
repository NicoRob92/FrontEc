import React from "react";

import styles from "./_DetailRightCard.module.scss";

const DetailRightCard = ({ productById }) => {
  return (
    <div className={`card ${styles.product_content}`}>
      <h2 className={styles.product_title}>{productById?.name}</h2>
      <div className={styles.product_rating}>
        <i className={`fas fas-star`}></i>
        <span>4.8(3K)</span>
      </div>
      <div className={styles.product_price}>
        <p className={styles.last_price}>
          Old price: <span>{productById?.price}</span>
        </p>
        <p className={styles.new_price}>
          New price:{" "}
          <span>{productById?.price - productById?.price * 0.2} (20%)</span>
        </p>
      </div>
      <div className={styles.product_detail}>
        <h3>Details</h3>
        <ul>
          <li>{productById?.description}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailRightCard;
