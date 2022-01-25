import React from 'react';
import styles from "./_Purchase.module.scss"

const Purchase = () => {
  return (
    <div className={`card ${styles.purchase_info}`}>
        <div className="card-body" styles="width: 18">
          <div className={styles.purchase_content}>
            <p>
              <span>Available</span>
            </p>
          </div>

          <div className={styles.purchase_button}>
            <div className={styles.purchase_quantity}>
              <p>1</p>
              <button>+</button>
              <button>-</button>
              <p>
                <span>(6)</span> available
              </p>
            </div>

            <button>Add to Cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
  );
};

export default Purchase;
