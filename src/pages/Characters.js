import axios from "axios";
import { useState, useEffect } from "react";
import CharactersCard from "../components/CharactersCard";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async (query) => {
    const response = await axios.get(
      "https://marvel-back-react-project.herokuapp.com/characters",
      {
        params: query,
      }
    );
    setCharacters(response.data.results);
    console.log(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div>
      {characters.map((character, index) => {
        return (
          <div key={index}>
            <Link to={`/character/${character._id}`}>
              <CharactersCard
                photo={character.thumbnail.path}
                name={character.name}
                description={character.description}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Characters;