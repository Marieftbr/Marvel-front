import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <div className="loader">
      <p>En cours de chargement...</p>
      <FontAwesomeIcon
        className="animation-rotate"
        icon="fa-solid fa-hourglass-empty"
        size="xl"
      />
    </div>
  );
};

export default Loader;
