import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CharactersCard = (props) => {
  return (
    <div>
      <div className="charac-card-container">
        <FontAwesomeIcon icon="fa-regular fa-heart" />
        <img className="charac-card-img" src={props.photo} />
        <h2 className="charac-card-name">{props.name}</h2>
        <p className="charac-card-description">{props.description}</p>
      </div>
    </div>
  );
};
export default CharactersCard;
