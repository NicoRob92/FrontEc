import Categories from "../../containers/Categories/Categories";
import Products from "../../containers/Products/Products";
import Paginate from "../../containers/Paginate/Paginate";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPages } from "../../helpers/getPages";
import { getProductsToShow } from "../../helpers/getProductsToShow";

import * as actionsCreators from "../../ducks/actions/actionCreators";

import style from "./_Market.module.scss";

// import faker from "faker";

const Market = () => {
  const categories = useSelector((state) => state.reducer.categories);
  const products = useSelector((state) => state.reducer.products);
  const chosenCategories = useSelector((state) => state.reducer.chosenCategories)
  const dispatch = useDispatch();
  console.log(products)
  console.log(categories)


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    let element = document.getElementById("categories");
    element
      ? element?.classList.add(`${style.categories}`)
      : element?.classList.remove(`${style.categories}`);
  }, []);

  const totalPages = getPages(products.length, productsPerPage);

  let totalProductsToShow = getProductsToShow(currentPage, productsPerPage);

  let toShow = products.slice(
    totalProductsToShow.first,
    totalProductsToShow.last
  );

  const setPage = (e) => setCurrentPage((prevState) => (prevState = e.target.value));
  
  
  const setCategoriesToFilter = (e) => {
    const target = e.target
    let index = chosenCategories.findIndex((e) => e === target.id);

    if 
    (target.checked && index === -1) {
      dispatch(actionsCreators.chooseCategories(target.id, "add category"))
    }

    else if 
    (!target.checked && index !== -1) {
      dispatch(actionsCreators.chooseCategories(target.id, "remove category", index))
    }
  };

  return (
    <div className={style.Market}>
      <Categories
        categories={categories}
        setCategoriesToFilter={setCategoriesToFilter}
        chosenCategories={chosenCategories}
      />
      <Products products={toShow} />
      <Paginate totalPages={totalPages} setPage={setPage} />
    </div>
  );
};
export default Market;
