import React from "react";
import styles from "./_Purchase.module.scss";

import { useRef } from "react";

const Purchase = ({ postById, addToCard, quantity }) => {
  return (
    <div className={`card ${styles.purchase_info}`}>
      <div className="card-body" styles="width: 18">
        <div className={styles.purchase_content}>
          {postById.stock === false ? (
            <h5>No hay stock</h5>
          ) : (
            <h5>En stock: {postById.stock}</h5>
          )}
        </div>

        <div className={styles.purchase_button}>
          <div className={styles.purchase_quantity}>
            <input
              id={"quantity"}
              type={"number"}
              defaultValue={1}
              min={1}
              max={postById.stock}
            />
          </div>

          <input type={"button"} value={"Add to cart"} onClick={addToCard} />
          <input type={"button"} value={"Buy now"}></input>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
