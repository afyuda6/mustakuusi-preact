import {Link} from "preact-router";
import {useInView} from "../../hooks/useInView";
import styles from "./GameCard.module.css";
import {getImageUrl} from "../../utils";

interface GameProps {
    title: string;
    imageSrc: string;
    date: string;
    description: string;
    categories: string[];
    detail: string;
    downloadLink: string;
    playLink: string;
}

interface GameCardProps {
    game: GameProps;
}

export const GameCard = ({
                             game: {
                                 title,
                                 imageSrc,
                                 date,
                                 description,
                                 categories,
                                 detail,
                                 downloadLink,
                                 playLink
                             }
                         }: GameCardProps) => {
    const {ref, isVisible} = useInView(0.18);

    return (
        <div ref={ref}
             className={`${styles.container} ${styles.fadeUp} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.card}>
                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                <h3 className={styles.title}>
                    <Link
                        href={`/preact${detail}`}
                        onClick={() => {
                            const html = document.documentElement;
                            html.style.scrollBehavior = "auto";

                            requestAnimationFrame(() => {
                                window.scrollTo(0, 0);
                                requestAnimationFrame(() => {
                                    html.style.scrollBehavior = "smooth";
                                });
                            });
                        }}
                    >{title}</Link>
                </h3>
                <time class={styles.date} dateTime={date}>Dirilis: {date}</time>
                <p className={styles.description}>{description}</p>
                <ul className={styles.categories}>
                    {
                        categories.map((category, id) => {
                            return <li key={id} className={styles.category}>{category}</li>;
                        })
                    }
                </ul>
                <div className={styles.links}>
                    {downloadLink && (
                        <a href={downloadLink} target="_blank" rel="noopener"><img
                            src={getImageUrl("googlebadge.png")}
                            alt="Unduh di Google Play"
                            className={styles.badge}
                        /></a>)}
                    {playLink && (
                        <a href={playLink} target="_blank" rel="noopener"><img
                            src={getImageUrl("itchbadge.png")}
                            alt="Main di itch.io"
                            className={styles.badge}
                        /></a>)}
                </div>
            </div>
        </div>
    )
}