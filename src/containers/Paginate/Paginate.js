import Page from "../../components/Page/Page";

const Paginate = (props) => {
  let pagesToShow = [];

  let num = 1;
  while (num <= props.totalPages) {
    pagesToShow = [...pagesToShow, num];
    num++;
  }

  return (
    <div>
      {pagesToShow.map((e) => (
        <Page page={e} setPage={props.setPage} />
      ))}
    </div>
  );
};
export default Paginate;
