import React from "react";

import styles from "./_DetailRightCard.module.scss";

const DetailRightCard = ({ postById }) => {
  return (
    <div className={`card ${styles.product_content}`}>
      <h2 className={styles.product_title}>{postById?.name}</h2>
      <div className={styles.product_price}>
        <p className={styles.new_price}>
          <span>${postById?.price}</span>
        </p>
      </div>
      <div className={styles.product_detail}>
        <h3>Descripción</h3>
        <p>{postById?.description}</p>
      </div>
    </div>
  );
};

export default DetailRightCard;
