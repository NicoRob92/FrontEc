import styles from "./_Categorie.module.scss";

const Categorie = ({ id, name, setCategoriesToFilter,checked }) => {

  return (
    <div className={styles.categorieContainer}>
      <div className={styles.pointer}>
        <input type="checkbox" id={id} onChange={setCategoriesToFilter} defaultChecked={checked}></input>
      </div>
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default Categorie;
