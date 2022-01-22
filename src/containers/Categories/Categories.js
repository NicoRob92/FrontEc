
import { useContext, useEffect } from "react"

import Categorie from "../../components/Categorie/Categorie"
import MarketContext from "../../context/MarketContext"

import styles from "./_Categories.module.scss"


const Categories = () => {
  let {fetchData,categories} = useContext(MarketContext)
  
  
  useEffect(() => {
    categories || fetchData()
  },[fetchData])

  return (
    <div className={styles.categoriesContainer}>
      {/* <input type='button' onClick={fetchData}></input> */}
      {categories?.map(e => (
        <Categorie key={e.name} name={e.name}/>

      ))}
    </div>
  );
};

export default Categories;
