import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComicsCard = (props) => {
  const handleClick = () => {
    if (props.isFavorite) {
      props.removeFavorite(props.id);
    } else {
      props.addFavorite(props.id);
    }
  };

  return (
    <div className="relative">
      <FontAwesomeIcon
        className={`heart ${props.isFavorite ? "heart-full" : "heart-empty"}`}
        icon="fa-regular fa-heart"
        size="xl"
        onClick={handleClick}
      />
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
