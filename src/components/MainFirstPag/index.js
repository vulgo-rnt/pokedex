import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContanier = styled.main`
  margin: 32px;
  h2 {
    margin-left: 10%;
    text-decoration: underline;
    font-family: "Pokemon Classic Regular";
  }
  button {
    height: auto;
    margin: 10px;
    font-family: "Pokemon Classic Regular";
    font-size: 20px;
    color: black;
    border: outset 2px black;
    padding: 10px 10px 15px 10px;
    border-radius: 20px;
    background-color: transparent;
  }
`;

const regions = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola",
  "Galar",
  "Paldea",
];
const types = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];
const allAndFavorite = ["All", "Favorite"];

function MainFisrtPag() {
  return (
    <MainContanier>
      <div>
        {allAndFavorite.map((value, index) => (
          <Link to={`/${value.toLowerCase()}`} key={index}>
            <button>{value}</button>
          </Link>
        ))}
      </div>
      <div>
        <h2>Regions</h2>
        {regions.map((value, index) => (
          <Link to={`/region/${value.toLowerCase()}`} key={index}>
            <button>{value}</button>
          </Link>
        ))}
      </div>
      <div>
        <h2>Types</h2>
        {types.map((value, index) => (
          <Link to={`/type/${value.toLowerCase()}`} key={index}>
            <button>{value}</button>
          </Link>
        ))}
      </div>
    </MainContanier>
  );
}

export default MainFisrtPag;