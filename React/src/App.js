import "./styles.css";
import Card from "./comp/Card";
import Contador from "./comp/Contador";
import { useEffect, useState } from "react";

export default function App(props) {
  const [pokemon, setPokemon] = useState([]);

  //Efeito colateral executado uma única vez
  useEffect(() => {
    const url =
      "https://pokemon.danielpimentel.com.br/v1/pokemon/tipo/fire/10/1";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setPokemon(resp.pokemon))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {pokemon.map((item) => console.log)}
      <Contador />
      <Card
        nome="Picachu"
        tipo="Fogo"
        img="https://4.bp.blogspot.com/-cebXJ9RB6r8/UPCCOoQHf0I/AAAAAAAAAyQ/fnM9_IbeW3U/s1600/pikachu_by_caridea-d3i4jd5.png"
      />
      <Card
        nome="Charmander"
        tipo="Eletrico"
        img="https://i.pinimg.com/originals/69/14/48/691448a61b6a2aea18f0360212fa6b45.png"
      />
      <Card />
    </div>
  );
}
