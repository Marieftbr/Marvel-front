const ComicsCard = (props) => {
  return (
    <div>
      <div className="comic-card-container">
        <div className="comic-card-img-container">
          <img className="comic-card-img" src={props.photo} />
        </div>
        <div className="comic-card-text">
          <h2 className="comic-card-name">{props.title}</h2>
          <p className="comic-card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ComicsCard;
