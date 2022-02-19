const Pagination = (props) => {
  return (
    <div>
      <button
        disabled={props.page === 1}
        onClick={() => {
          props.setPage(props.page - 1);
        }}
      >
        {"<"}
      </button>
      <button>{props.page}</button>
      <button
        disabled={props.page >= Math.ceil(props.totalPage)}
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};
export default Pagination;
