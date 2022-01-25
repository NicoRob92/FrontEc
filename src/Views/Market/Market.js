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
  const chosenCategories = useSelector((state) => state.reducer.chosenCategories);
  const filteredProductsByCategory = useSelector((state) => state.reducer.filteredProductsByCategory);
  const dispatch = useDispatch();
  console.log(products)

  let productsToShow = filteredProductsByCategory.length === 0 ? products : filteredProductsByCategory;


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    let element = document.getElementById("categories");
    element
      ? element?.classList.add(`${style.categories}`)
      : element?.classList.remove(`${style.categories}`);
  }, []);

  const totalPages = getPages(productsToShow.length, productsPerPage);

  let toSlice = getProductsToShow(currentPage, productsPerPage);

  let finalProductsToShow = productsToShow.slice(toSlice.first, toSlice.last);

  const setPage = (e) => setCurrentPage((prevState) => (prevState = e.target.value));

  const setCategories = (e) => {
    const target = e.target;
    let index = chosenCategories.findIndex((e) => e === Number(target.value));

    if (target.checked && index === -1)
      dispatch(actionsCreators.chooseCategories(Number(target.value), "add category"));
    else if (!target.checked && index !== -1)
      dispatch(actionsCreators.chooseCategories(Number(target.value),"remove category", index));
    else if (target.id === "reset-chosenCategories")
      dispatch(actionsCreators.resetCategories());
    else if (target.id === "search")
      dispatch(actionsCreators.filterProductsByCategory());
  };

  return (
    <>
      <div className={style.Market}>
        <Categories
          categories={categories}
          setCategories={setCategories}
          chosenCategories={chosenCategories}
        />
        <Products products={finalProductsToShow} />
      </div>
      <div className={style.Paginate}>
        <Paginate totalPages={totalPages} setPage={setPage} />
      </div>
    </>
  );
};

export default Market;
