import { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComics = async (query) => {
    const response = await axios.get(
      "https://marvel-back-react-project.herokuapp.com/comics",
      {
        params: query,
      }
    );
    setComics(response.data.results);
    console.log(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="comics-list">
      {comics.map((comic, index) => {
        return (
          <div key={index}>
            <ComicsCard
              title={comic.title}
              photo={comic.thumbnail.path + "." + comic.thumbnail.extension}
              description={comic.description}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Comics;
