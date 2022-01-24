import styles from "./_FilterSubmit.module.scss"

const FilterSubmit = ({setCategories}) => {
  return (
    <div>
      <input className={styles.FilterSubmit} id='search' type="button" value="Buscar" onClick={setCategories}/>
    </div>
  )
}
export default FilterSubmit