import {useEffect} from "preact/hooks";
import {Navbar} from "../components/Navbar/Navbar";
import {Privacy} from "../components/Privacy/Privacy";
import {Contact} from "../components/Contact/Contact";
import games from "../data/games.json";

export const PrivacyPolicyPage = ({id}: { id?: string; path?: string }) => {
    const game = games.find((p) => p.id === id);

    if (!game) {
        return <div></div>;
    }

    useEffect(() => {
        document.title = `${game.title} | mustakuusi`;
    }, [game.title]);

    return (
        <div>
            <Navbar/>
            <Privacy
                id={id}
                title={game.title}/>
            <Contact/>
        </div>
    );
};