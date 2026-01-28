import {useEffect} from "preact/hooks";
import {Navbar} from "../components/Navbar/Navbar";
import {Hero} from "../components/Hero/Hero";
import {Games} from "../components/Games/Games";
import {Contact} from "../components/Contact/Contact";
import characters from "../data/characters.json";
import games from "../data/games.json";

interface CharacterData {
    id: string;
    name: string;
    imageSrc: string;
}

interface GameData {
    id: string;
    title: string;
    imageSrc: string;
    date: string;
    description: string;
    categories: string[];
    detail: string;
    downloadLink: string;
    playLink: string;
    longDescription: string;
    privacyPolicyLink: string;
    screenshots: string[];
    characters: string[];
}

export const CharacterPage = ({id}: { id?: string; path?: string }) => {
    const character = (characters as CharacterData[]).find((p) => p.id === id);

    if (!character) {
        return <div></div>;
    }

    const filteredGames = (games as GameData[]).filter((p) =>
        p.characters.includes(character.id)
    );

    useEffect(() => {
        document.title = `${character.name} | mustakuusi`;
    }, [character.name]);

    return (
        <div>
            <Navbar/>
            <Hero
                title={character.name}
                imageUrl={character.imageSrc}
            />
            <Games gameSection={`${character.name} di Gim`} games={filteredGames}/>
            <Contact/>
        </div>
    );
};
