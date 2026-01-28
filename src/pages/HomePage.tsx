import {useEffect} from "preact/hooks";
import {Navbar} from "../components/Navbar/Navbar";
import {Hero} from "../components/Hero/Hero";
import {About} from "../components/About/About";
import {Games} from "../components/Games/Games";
import {Characters} from "../components/Characters/Characters";
import {Contact} from "../components/Contact/Contact";
import characters from "../data/characters.json";
import games from "../data/games.json";

export const HomePage = ({}:{path?: string}) => {
    useEffect(() => {
        document.title = `mustakuusi`;
    }, []);

    return (
        <div>
            <Navbar/>
            <Hero
                title="Eksplorasi Teka-teki, Pengetahuan, dan Edukasi"
                description="Setiap dunia menawarkan cara baru untuk berpikir dan belajar melalui gim."
                imageUrl="hero.png"
            />
            <About
                about="Tentang"
                itemDescription="Kami merancang gim teka-teki logika, kuis pengetahuan, kuis edukasi, serta arkade kasual yang mudah dimainkan, menyenangkan, dan dapat mengasah cara berpikir. Kami berfokus pada pembuatan mekanik sederhana dan gameplay yang halus, sehingga setiap gim tidak hanya menghibur, tetapi juga memberikan nilai edukatif. Tujuan kami adalah menciptakan pengalaman bermain yang membawa keceriaan, pembelajaran, dan imajinasi bagi pemain dari berbagai usia."
            />
            <Games gameSection="Gim" games={games}/>
            <Characters characterSection="Karakter" characters={characters}/>
            <Contact/>
        </div>
    );
}