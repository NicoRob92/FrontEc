const Page = (props) => {
  return (
    <div>
      <input type='button' value={props.page} onClick={props.setPage}></input>
    </div>
  )
}
export default Page