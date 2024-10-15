import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-2">
            <h1>Home</h1>
            <button onClick={() => navigate('/characters')}>Go to Characters</button>
            <button onClick={() => navigate('/about')}>Go to About</button>
            <button onClick={() => window.location.href = '/about'}>Go to About with button href</button>
            <a href="/about">About con anchor</a>
            <Link to='/about'>About con LINK</Link>
        </div>
    )
};

export default Home;