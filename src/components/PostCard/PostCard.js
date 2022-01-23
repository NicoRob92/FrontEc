import styles from './_PostCard.module.scss';
import {Link} from 'react-router-dom'
export const PostCard = ({ product }) => {
  return (
    <Link to='/card' className={styles.container}>
    
      <div className={styles.image}>
        <img src={product.image} alt='' />
      </div>
      <div className={styles.about}>
      <h1>{product.name}</h1>
      <h2>$ {product.price}</h2>
      </div>
      <div className={styles.options}>
      <span>Envio Gratis</span>
      <span>Stock</span>
      <span>Privado</span>
      </div>
    
    </Link>
  );
};
