import axios from "axios";
import { useState, useEffect } from "react";
import CharactersCard from "../components/CharactersCard";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("name") || "");
  const [page, setPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );

  // Pour calculer le nombres de pages en tout
  const [totalPage, setTotalPage] = useState(1);

  const fetchCharacters = async (query) => {
    setSearchParams(query);
    const response = await axios.get(
      "https://marvel-back-react-project.herokuapp.com/characters",
      {
        params: query,
      }
    );
    setCharacters(response.data.results);

    const count = response.data.count;
    const limit = response.data.limit;
    setTotalPage(Math.ceil(count / limit));
    setIsLoading(false);
  };

  useEffect(() => {
    const query = { page };
    if (search) {
      query.name = search;
    }

    fetchCharacters(query);
  }, [search, page]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="characters-age">
      <h1 className="title-page">Les personnages Marvel</h1>
      <div className="input-search-wrapper">
        <input
          className="search-character"
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
      <div className="character-list">
        {characters.map((character, index) => {
          return (
            <div key={index}>
              <Link to={`/character/${character._id}`}>
                <CharactersCard
                  photo={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  name={character.name}
                  description={character.description}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  );
};
export default Characters;
