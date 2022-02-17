import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Character = (props) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://marvel-back-react-project.herokuapp.com/characters"
    );
    setCharacter(
      response.data.results.find((character) => character._id === id)
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <h1>Comics de {character.name}</h1>
    </div>
  );
};
export default Character;
