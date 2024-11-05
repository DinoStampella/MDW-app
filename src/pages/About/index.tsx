import { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "../../store/store";
import { getCharacters } from "../../slices/characters";
import Card from "../../components/Card";

const About = () => {
    const { list, loading } = useSelector((state) => state.reducer.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!list.length) {
            dispatch(getCharacters());
        }
        console.log(list);
    }
    , [dispatch, list]);

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>About</h1>
            <div className="flex flex-wrap justify-center">
                {list.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </>
    )
};

export default About;