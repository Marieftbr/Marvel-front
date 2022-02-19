import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import CharactersCard from "../components/CharactersCard";

const Favoris = () => {
  const [favoriteCharactersIds, setFavoriteCharactersIds] = useState(
    JSON.parse(Cookies.get("favoriteCharacters") || "[]")
  );
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const fetchCharacters = async () => {
    const responses = await Promise.all(
      favoriteCharactersIds.map((characterId) => {
        return axios.get(
          `https://marvel-back-react-project.herokuapp.com/character/${characterId}`
        );
      })
    );
    setFavoriteCharacters(responses.map((response) => response.data));
  };

  useEffect(() => {
    fetchCharacters();
  }, [favoriteCharactersIds]);

  const removeFavorite = (id) => {
    if (favoriteCharactersIds.includes(id)) {
      const newFavorites = favoriteCharactersIds.filter(
        (favoriteId) => favoriteId !== id
      );
      setFavoriteCharactersIds(newFavorites);
      Cookies.set("favoriteCharacters", JSON.stringify(newFavorites));
    }
  };

  return (
    <div>
      <div>
        <h1>Mes personnages favoris</h1>
        <div className="character-list">
          {favoriteCharacters.map((character) => {
            return (
              <div key={character._id}>
                <CharactersCard
                  id={character._id}
                  photo={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  name={character.name}
                  description={character.description}
                  removeFavorite={removeFavorite}
                  isFavorite={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Favoris;
