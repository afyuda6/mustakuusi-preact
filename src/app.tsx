import {useEffect} from "preact/hooks";
import {Router, LocationProvider} from "preact-iso";
import {Marquee} from "./components/Marquee/Marquee";
import {Footer} from "./components/Footer/Footer";
import {HomePage} from "./pages/HomePage";
import {GamePage} from "./pages/GamePage";
import {CharacterPage} from "./pages/CharacterPage";
import {PrivacyPolicyPage} from "./pages/PrivacyPolicyPage";
import styles from "./App.module.css";

export function App() {
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({behavior: "smooth"});
        }
    }, []);

    return (
        <LocationProvider>
            <div className={styles.App}>
                <Marquee/>
                <Router>
                    <HomePage path="/preact/"/>
                    <GamePage path="/preact/:id"/>
                    <CharacterPage path="/preact/character/:id"/>
                    <PrivacyPolicyPage path="/preact/privacy-policy/:id"/>
                    <div default/>
                </Router>
                <Footer/>
            </div>
        </LocationProvider>
    )
}
