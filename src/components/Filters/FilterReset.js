import style from "./_FilterReset.module.scss"
const FilterReset = ({setCategories}) => {
  return (
    <div>
      <button className={style.FilterReset} type="reset" id='reset-chosenCategories' onClick={setCategories}>Reiniciar</button>
    </div>
  )
}
export default FilterReset