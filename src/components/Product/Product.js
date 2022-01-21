import styles from "./_Product.module.scss"
const Product = ({name, price, image}) => {
  return (
    <div className={styles.productContainer}>
      <img className={styles.image}src={image} alt={name}/>
      <h5>{name}</h5>
      <h2>{price}$</h2>
    </div>
  );
};

export default Product;
