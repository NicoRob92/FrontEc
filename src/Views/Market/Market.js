import Categories from "../../containers/Categories/Categories";
import Products from "../../containers/Products/Products";

import { MarketProvider } from "../../context/MarketContext";

import style from "./_Market.module.scss";

import faker from "faker";

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

const Market = () => {
  return (
    <MarketProvider>
      <div className={style.Market}>
        <Categories/>
        <Products products={products} />
      </div>
    </MarketProvider>
  );
};
export default Market;
