import Product from "../../components/Product/Product"
import style from "./_Products.module.scss"

const Products = ({products}) => {
  return (
    <div className={style.productsContainer}>
      {products.map(e => (
        <Product key={e.name} name={e.name} price={e.price} image={e.image}/>
      ))}
    </div>
  )
}

export default Products