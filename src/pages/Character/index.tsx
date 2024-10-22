import { useEffect, useState } from "react";
import "../../App.css";
import  { Character as CharacterType } from "../../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import SingoutButton from "../../components/SignoutButton";

const Character = () => {
  const [character, setCharacter] = useState<CharacterType>();
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate()

    const { id } = useParams();

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json()
    setCharacter(data)
    setLoading(false);
  };

  useEffect(() => {
    fetchData()
  },[]);

  return (
    loading ? <h1>Is loading</h1> : (
        <div>
                <SingoutButton/>

            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <img src={character?.image} alt={character?.name} />
            <button onClick={()=> navigate("/characters")}>Go back</button>
        </div>
    )
  );
};

export default Character;