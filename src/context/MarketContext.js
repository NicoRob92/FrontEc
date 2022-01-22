import { createContext, useState } from "react";

const MarketContext = createContext();

const MarketProvider = ({ children }) => {
  let [categories, setCategories] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:4000/api/category")
      .then((res) => res.json())
      .then((res) => setCategories(prevState => prevState = res))
      .catch((err) => console.log(err));
  };

  const data = {
    fetchData,
    categories,
  };

  return (
    <MarketContext.Provider value={data}>{children}</MarketContext.Provider>
  );
};

export { MarketProvider };
export default MarketContext;
