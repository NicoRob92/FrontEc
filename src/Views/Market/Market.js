import Categories from "../../containers/Categories/Categories"
import Products from "../../containers/Products/Products"

import style from "./_Market.module.scss"

import faker from 'faker';

let products = [];
let i = 1;
while (i <= 20) {
  products = [
    ...products,
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.people(),
    },
  ];
  i++;
}

let categories = [
  "Hogar",
  "Tecnologia",
  "Computacion",
  "Electrodomesticos",
  "Indumentaria & calzado",
  "Automotor",
]

const Market = () => {
  return (
    <div className={style.Market}>
      <Categories categories={categories}/>
      <Products products={products}/>
    </div>
  )
}
export default Market