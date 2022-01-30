import { useRef, useEffect } from "react";

import CartItem from "./CartItem";

import styles from "./Cart.module.scss";

const Cart = ({ showCart, setShowCart, cartState, removePost, incrementQuantity, decrementQuantity,}) => {
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
          {cartState?.map((post) => (
            <CartItem
              key={post.id}
              name={post.name}
              id={post.id}
              quantity={post.quantity}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              removePost={removePost}
            />
          ))}
          <div>
            <input type="button" value="Checkout" />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Cart;
