
import Categories from "../../containers/Categories/Categories";
import Products from "../../containers/Products/Products";

import { MarketProvider } from "../../context/MarketContext";

import style from "./_Market.module.scss";

import faker from "faker";

import React, {useEffect} from 'react'



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


const Market = (props) => {
  console.log(props)

  useEffect(()=>{
    let element = document.getElementById('categories');
    element ? element?.classList.add(`${style.categories}`) : element?.classList.remove(`${style.categories}`)
  })

  return (

    <MarketProvider>
      <div className={style.Market}>
        <Categories categories={props.categories}/>
        <Products products={props.products} />
      </div>
    </MarketProvider>

  );
};
export default Market;
