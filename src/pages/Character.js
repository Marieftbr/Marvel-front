import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

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

  const getDescription = (comic) => {
    const maxSize = 350;

    if (!comic.description) {
      return "";
    }
    if (comic.description.length > maxSize) {
      return comic.description.slice(0, maxSize) + "...";
    }
    return comic.description;
  };

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <div className="container-comic-form-charac">
      <h1 className="title-character-comics title-page">
        Comics de {character.name}
      </h1>
      <div className="comics-list">
        {comics.map((comic, index) => {
          return (
            <div className="card-ratio">
              <div key={index} className="wrapper-comic-from-charac">
                <img
                  className="image-character-comics"
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                ></img>
                <span className="title-character-comics">{comic.title}</span>
                <span className="description-character-comics">
                  {getDescription(comic)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Character;
