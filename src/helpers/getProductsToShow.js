const getProductsToShow = (currentPage, productsPerPage) => {
  return {
    first: currentPage * productsPerPage - productsPerPage,
    last: currentPage * productsPerPage,
  };
};

export { getProductsToShow };
