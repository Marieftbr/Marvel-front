import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Character = (props) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [comics, setComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const responseCharacter = await axios.get(
      `https://marvel-back-react-project.herokuapp.com/character/${id}`
    );
    setCharacter(responseCharacter.data);

    const responseComics = await axios.get(
      `https://marvel-back-react-project.herokuapp.com/comics/${id}`
    );
    setComics(responseComics.data.comics);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container-comic-form-charac">
      <h1 className="title-character-comics">Comics de {character.name}</h1>
      <div className="comics-list">
        {comics.map((comic, index) => {
          return (
            <div key={index} className="wrapper-comic-from-charac">
              <img
                className="image-character-comics"
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              ></img>
              <span className="title-character-comics">{comic.title}</span>
              <span className="description-character-comics">
                {comic.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Character;
