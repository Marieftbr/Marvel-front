import logo from "../img/logo-marvel.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const favoris = false;
  const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo marvel"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="characters-btn" onClick={() => navigate("/characters")}>
        Personnages
      </div>

      <div className="comics-btn" onClick={() => navigate("/comics")}>
        Comics
      </div>
      <div className="favoris-btn" onClick={() => navigate("/favoris")}>
        Favoris
      </div>
    </div>
  );
};
export default Nav;
