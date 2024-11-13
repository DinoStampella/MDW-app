import { useEffect } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import SignOutButton from "../../components/SignOutButton";
import { useDispatch, useSelector } from "../../store/store";
import { getProducts } from "../../slices/products";

const Products = () => {

  const { list, loading } = useSelector((state) => state.reducer.products)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if(!list.length){
      dispatch(getProducts());
    }
  }, [dispatch, list]);

  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">
        <h1 className="mb-10 bg-black rounded-md w-fit p-2">
          Products List
        </h1>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {list.map((product) => (
            <div key={product._id} className="flex flex-col border-2 rounded-md p-3 mb-8">
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div> 
          ))}
        </div>
      )}
      <button onClick={() => navigate("/")}>Go to Home</button>
      <button onClick={getProducts}>Get Products</button>
      <SignOutButton />
    </div>
  );
};

export default Products;
