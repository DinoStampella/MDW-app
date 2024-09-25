import { useEffect, useState } from "react";
import "./App.css";
import Card, { Character } from "./components/Card";

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?count=20"
    );
    const data = await response.json()
    setCharacters(data.results)
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
    <h1>Rick and Morty</h1>
    <div className='cardsList'>
      {characters.map((character)=>
      <Card key={character.id} character={character}/>
      )}
    </div>
    </>
  );
};

export default App;
