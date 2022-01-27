import { useRef, useEffect } from "react";

import CartItem from "./CartItem";

import styles from "./Cart.module.scss";

const Cart = ({
  showCart,
  setShowCart,
  allPostInCart,
  removeProduct,
  incrementQuantity,
  reduceQuantity,
}) => {
  const cart = useRef(null);
  useEffect(() => {
    if (!showCart) return cart.current.classList.add(`${styles.closed}`);
    return cart.current.classList.remove(`${styles.closed}`);
  });

  return (
    <div className={styles.cartContainer}>
      <section className={styles.cart} ref={cart}>
        <div>
          <input
            type="button"
            value="X"
            onClick={() => setShowCart(false)}
            className={styles.close}
          />
        </div>
        <div className={styles.title}>
          <h1>Tu carrito</h1>
        </div>
        <div className={styles.cartList}>
          {allPostInCart?.map((item) => (
            <CartItem
              name={item.name}
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              reduceQuantity={reduceQuantity}
              incrementQuantity={incrementQuantity}
              removeProduct={removeProduct}
            />
          ))}
          <input type="button" value="Checkout"/>
        </div>
      </section>
    </div>
  );
};

export default Cart;
