import styles from "./_Categorie.module.scss";

const Categorie = ({ name }) => {
  return (
    <div className={styles.categorieContainer}>
      <div className={styles.pointer}>
        <input type="checkbox" id={name}></input>
      </div>
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default Categorie;
