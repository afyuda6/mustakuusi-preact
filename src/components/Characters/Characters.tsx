import {CharacterCard} from "./CharacterCard";
import styles from "./Characters.module.css";

interface CharacterData {
    id: string;
    name: string;
    imageSrc: string;
}

interface CharactersProps {
    characterSection: string;
    characters: CharacterData[];
}

export const Characters = ({characterSection, characters}: CharactersProps) => {
    return (
        <section className={styles.container} id="characters">
            <h2 className={styles.title}>{characterSection}</h2>
            <div className={styles.characters}>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </div>
        </section>
    );
};
