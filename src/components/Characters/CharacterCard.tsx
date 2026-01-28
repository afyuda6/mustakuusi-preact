import {Link} from "preact-router";
import {useInView} from "../../hooks/useInView";
import styles from "./CharacterCard.module.css";
import {getImageUrl} from "../../utils";

interface CharacterProps {
    id?: string;
    name: string;
    imageSrc: string;
}

interface CharacterCardProps {
    character: CharacterProps;
}

export const CharacterCard = ({character: {id, name, imageSrc}}: CharacterCardProps) => {
    const {ref, isVisible} = useInView(0.18);

    return (
        <div ref={ref} className={`${styles.container} ${styles.fadeUp} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.card}>
                <div className={styles.imagecon}>
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${name}`} className={styles.image}/>
                </div>
                <Link
                    href={`/preact/character/${id}`}
                    className={styles.title}
                    onClick={() => {
                        const html = document.documentElement;
                        html.style.scrollBehavior = "auto";

                        requestAnimationFrame(() => {
                            window.scrollTo(0, 0);
                            requestAnimationFrame(() => {
                                html.style.scrollBehavior = "smooth";
                            });
                        });
                    }}>{name}</Link>
            </div>
        </div>
    )
}