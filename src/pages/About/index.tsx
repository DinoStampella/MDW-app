import { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "../../store/store";
import { getCharacters } from "../../slices/characters";
import Card from "../../components/Card";

const About = () => {
    const { list, loading } = useSelector((state) => state.reducer.characters)
    const dispatch = useDispatch();

    useEffect(() => {
        if(!list.length){
          dispatch(getCharacters());
        }
      }, [dispatch, list]);

      console.log('list', list)
      console.log('loading', loading)

    return (
        <>
        <h1>About</h1>

        {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="cardsList">
              {list.map((character) => (
                <Card key={character.id} character={character} />
              ))}
            </div>
          )}
        </>
    )
};

export default About;