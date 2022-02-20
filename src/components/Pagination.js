import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = (props) => {
  return (
    <div className="pagination">
      <button
        className="pagination-previous"
        disabled={props.page === 1}
        onClick={() => {
          props.setPage(props.page - 1);
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-angle-left" size="xl" />
      </button>
      <span className="pagination-value">{props.page}</span>
      <button
        className="pagination-next"
        disabled={props.page >= Math.ceil(props.totalPage)}
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-angle-right" size="xl" />
      </button>
    </div>
  );
};
export default Pagination;
