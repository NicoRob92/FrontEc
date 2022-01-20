import Categorie from "../../components/Categorie/Categorie"

import styles from "./_Categories.module.scss"

const Categories = ({categories}) => {
  return (
    <div className={styles.categoriesContainer}>
      {categories.map(e => (
        <Categorie key={e} name={e}/>
      ))}
    </div>
  )
}

export default Categories