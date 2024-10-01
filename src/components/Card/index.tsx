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

enum Specie {
  HUMAN = 'Human',
  ALIEN = 'Alien'
}

interface StatusType {
  [key: string]: string
}

const PropertyCheckStatus: StatusType = {
  Alive: styles.propertyAlive,
  Dead: styles.propertyDead,
  unknown: styles.propertyUnknown,
}

const Card = ({character}: {character: Character}) => {
  const isHuman = character.species === Specie.HUMAN
  return (
    <div className={isHuman ? styles.cardHumanContainer : styles.cardAlienContainer }>
        <img src={character.image} alt={character.name} className={styles.image} />
        <div className={styles.properties}>
            <div className={styles.propertiesContainerStart}>
                <p className={styles.propertyName}>{character.name}</p>
                <p className={PropertyCheckStatus[character.status]}>{character.status}</p>
            </div>
            <div className={styles.propertiesContainerEnd}>
                <p className="flex items-center m-0 h-[50px] text-start">{character.gender}</p>
            </div>
            <p className={styles.propertyLocation}>{character.location.name}</p>
        </div>
    </div>
  );
};

export default Card;
