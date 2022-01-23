import Categorie from "../../components/Categorie/Categorie";

import styles from "./_Categories.module.scss";

const Categories = ({ categories, setCategoriesToFilter, chosenCategories }) => {
  console.log(chosenCategories)

  return (
    <div className={styles.categoriesContainer}>
      {categories?.map((e) => (
        <Categorie key={e.id} id={e.id} name={e.name} setCategoriesToFilter={setCategoriesToFilter} checked={chosenCategories.includes(e.id)}/>
      ))}
    </div>
  );
};

export default Categories;
