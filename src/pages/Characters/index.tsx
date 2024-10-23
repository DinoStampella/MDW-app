import { useEffect, useState } from "react";
import "../../App.css";
import Card, { Character } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import SignOutButton from "../../components/SignOutButton";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?count=20"
    );
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);
  };
  const token = localStorage.getItem("token")

  const fetchProductById = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/products/66ce66b9ac4a442e5b3d66a9",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Bearer ${token}`,
          },
        }
      );
      console.log("fetchProductById", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchProductById();
  }, []);

  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">
        <h1 className="mb-10 bg-black rounded-md w-fit p-2">
          Rick and Morty API
        </h1>
      </div>
      <SignOutButton />
      <div className="flex justify-center">
        <h2 className="mb-10 bg-white rounded-md w-fit p-2 text-black">
          List of characters
        </h2>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="cardsList">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      )}
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Characters;
