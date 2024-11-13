import { useNavigate } from "react-router-dom";
import "../../App.css";

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-2">
            <h1>Home</h1>
            <button onClick={() => navigate('/characters')}>Go to Characters</button>
            <button onClick={() => navigate('/about')}>Go to About</button>
            <button onClick={() => navigate('/signup')}>Go to Sign Up</button>
            <button onClick={() => navigate('/login')}>Go to Log In</button>
            <button onClick={() => navigate('/products')}>Go to Products</button>
        </div>
    )
};

export default Home;