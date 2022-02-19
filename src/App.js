import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Favoris from "./pages/Favoris";
library.add(faHeart);

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/favoris" element={<Favoris />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
