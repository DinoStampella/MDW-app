import styles from "./styles.module.css";
interface Location {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  species: string;
  location: Location;
}

const Card = ({character}: {character: Character}) => {
  return (
    <div className={styles.cardContainer}>
        <img src={character.image} alt={character.name} className={styles.image} />
        <div className={styles.properties}>
            <div className={styles.propertiesContainerStart}>
                <p className={styles.propertyName}>{character.name}</p>
                <p className={styles.propertyStatus}>{character.status}</p>
            </div>
            <div className={styles.propertiesContainerEnd}>
                <p className={styles.property}>{character.gender}</p>
                <p className={styles.property}>{character.species}</p>
            </div>
            <p className={styles.propertyLocation}>{character.location.name}</p>
        </div>
    </div>
  );
};

export default Card;
