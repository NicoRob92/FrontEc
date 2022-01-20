import styles from "./_Product.module.scss"
const Product = ({name, price, image}) => {
  return (
    <div className={styles.productContainer}>
      <h5>{name}</h5>
      <img className={styles.image}src={image} alt={name}/>
      <h2>{price}</h2>
    </div>
  );
};

export default Product;
