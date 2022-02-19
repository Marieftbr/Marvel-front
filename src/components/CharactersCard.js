import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CharactersCard = (props) => {
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
      <Link to={`/character/${props.id}`}>
        <div className="charac-card-container">
          <img className="charac-card-img" src={props.photo} />
          <h2 className="charac-card-name">{props.name}</h2>
          <p className="charac-card-description">{props.description}</p>
        </div>
      </Link>
    </div>
  );
};
export default CharactersCard;
