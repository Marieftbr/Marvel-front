import { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Cookies from "js-cookie";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("title") || "");
  const [page, setPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );

  const [totalPage, setTotalPage] = useState(1);

  //Déclaration de Favoris
  const [favorites, setFavorites] = useState(
    JSON.parse(Cookies.get("favoriteComics") || "[]")
  );

  const addFavorite = (idToAdd) => {
    const newFavorites = [...favorites, idToAdd];
    setFavorites(newFavorites);
    Cookies.set("favoriteComics", JSON.stringify(newFavorites));
  };

  const removeFavorite = (idToRemove) => {
    const newFavorites = favorites.filter((element) => element !== idToRemove);
    setFavorites(newFavorites);
    Cookies.set("favoriteComics", JSON.stringify(newFavorites));
  };

  const isFavorite = (idToCheck) => {
    return favorites.includes(idToCheck);
  };

  const fetchComics = async (query) => {
    setSearchParams(query);
    const response = await axios.get(
      "https://marvel-back-react-project.herokuapp.com/comics",
      {
        params: query,
      }
    );
    setComics(response.data.results);

    const count = response.data.count;
    const limit = response.data.limit;
    setTotalPage(Math.ceil(count / limit));
    setIsLoading(false);
  };

  useEffect(() => {
    const query = { page };
    if (search) {
      query.title = search;
    }

    fetchComics(query);
  }, [search, page]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="comic-container">
      <h1 className="title-page">Les comics Marvel</h1>
      <div className="input-search-wrapper">
        <input
          className="search-comic"
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPage(1);
          }}
        />
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      <div className="comics-list">
        {comics.map((comic, index) => {
          return (
            <div key={index}>
              <ComicsCard
                id={comic._id}
                title={comic.title}
                photo={comic.thumbnail.path + "." + comic.thumbnail.extension}
                description={comic.description}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isFavorite={isFavorite(comic._id)}
              />
            </div>
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  );
};
export default Comics;
