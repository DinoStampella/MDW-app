import { useEffect, useState } from "react";
import "../../App.css";
import Card, { Character } from "../../components/Card";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate()

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?count=20"
    );
    const data = await response.json()
    setCharacters(data.results)
    setLoading(false);
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">
        <h1 className="mb-10 bg-black rounded-md w-fit p-2">Rick and Morty API</h1>
      </div>
      <div className="flex justify-center">
        <h2 className="mb-10 bg-white rounded-md w-fit p-2 text-black">List of characters</h2>
      </div>
      {loading ? <h1>Loading...</h1> : (
        <div className='cardsList'>
          {characters.map((character)=>
          <Card key={character.id} character={character}/>
          )}
        </div>
      )}
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Characters;