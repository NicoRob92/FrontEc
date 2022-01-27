import styles from "./CartItem.module.scss";

const CartItem = ({ name, id, reduceQuantity, incrementQuantity, removeProduct, quantity }) => {
  return (
    <div className={styles.item}>
      <div>
        <input id={id} type={"button"} value={"X"} onClick={removeProduct}></input>
      </div>
      <div>
        <h5>{name}</h5>
      </div>
      <div>
        <span>{quantity}</span>
        <input id={id} type={"button"} value={"+"} onClick={incrementQuantity}></input>
        <input id={id} type={"button"} value={"-"} onClick={reduceQuantity}></input>
      </div>
    </div>
  );
};

export default CartItem;
