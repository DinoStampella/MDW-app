import { useEffect } from "react";
import "../../App.css";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import SignOutButton from "../../components/SignOutButton";
import { useDispatch, useSelector } from "../../store/store";
import { getCharacters } from "../../slices/characters";
import api from "../../config/axios";

const Characters = () => {

  const { list, loading } = useSelector((state) => state.reducer.characters)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // How to call local api
  // const token = localStorage.getItem("token")
  
  // const fetchProductById = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:4000/products/66ce66b9ac4a442e5b3d66a9",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log("fetchProductById", response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getProducts = async () => {
    try {
      const response = await api.get('/products')
      console.log('response', response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if(!list.length){
      dispatch(getCharacters());
    }
    // fetchProductById();
  }, [dispatch, list]);

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
          {list.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      )}
      <button onClick={() => navigate("/")}>Go to Home</button>
      <button onClick={getProducts}>Get Products</button>
    </div>
  );
};

export default Characters;
