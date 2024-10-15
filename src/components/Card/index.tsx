import { Link } from "react-router-dom";
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
  url: string;
}

enum Gender {
  MALE =  'Male',
  FEMALE = 'Female'
}

enum Species {
  HUMAN = 'Human',
  ALIEN = 'Alien'
}

interface StatusTypes {
  [key: string]: string;
};

const PropertyCheckStatus: StatusTypes = {
  Alive: styles.propertyStatus,
  Dead: styles.propertyStatusDead,
  unknown: styles.propertyStatusUnknown,
}

const Card = ({character}: {character: Character}) => {

  const isMale = character.gender === Gender.MALE;

  const isHuman = character.species === Species.HUMAN;

  return (
    <div className={isHuman ? styles.cardHumanContainer : styles.cardAlienContainer}>
      <div className={styles.nameContainer}>
        <Link to={`${character.id}`} className="no-underline text-inherit">
          <p className={styles.propertyName}>{character.name}</p>
        </Link>
      </div>
      <img src={character.image} alt={character.name} className="w-full rounded-[5px] lg:rounded-[5px]" />
      <div className={styles.properties}>
          <div className={styles.genderAndStatus}>
              <p className={isMale ? styles.male : styles.female}>{character.gender}</p>
              <p className={PropertyCheckStatus[character.status]}>{character.status}</p>
          </div>
          <p className="flex justify-center items-center m-auto mt-2 text-yellow-400 font-semibold p-1 text-sm h-fit w-fit">{character.location.name}</p>
      </div>
    </div>
  );
};

export default Card;