import {useEffect, useRef, useState} from "preact/hooks";
import {Link} from "preact-router";
import {useLocation} from "preact-iso";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);

    const location = useLocation();

    const BASE_PATH = "/preact";
    const path = location.path.startsWith(BASE_PATH)
        ? location.path.slice(BASE_PATH.length) || "/"
        : location.path;

    const isHomePage = path === "/";
    const isGamePage = path !== "/" && !path?.includes("privacy-policy") && !path?.includes("character");
    const isCharacterPage = path?.startsWith("/character");

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (menuOpen && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className={styles.navbar} ref={navbarRef}>
            <Link
                href="/preact"
                className={styles.title}
                onClick={() => {
                    const html = document.documentElement;

                    html.style.scrollBehavior = "auto";
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                        html.style.scrollBehavior = "smooth";
                    }, 50);
                }}
            >mustakuusi</Link>
            <div className={styles.menu}>
                <div
                    className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    {(isHomePage || isGamePage) && (
                        <li>
                            <a href="#about" onClick={() => {
                                setTimeout(() => {
                                    history.replaceState(null, '', window.location.pathname);
                                }, 200);
                            }}>Tentang</a>
                        </li>
                    )}
                    {(isHomePage || isCharacterPage) && (
                        <li>
                            <a href="#games" onClick={() => {
                                setTimeout(() => {
                                    history.replaceState(null, '', window.location.pathname);
                                }, 200);
                            }}>Gim</a>
                        </li>
                    )}
                    {(isHomePage || isGamePage) && (
                        <li>
                            <a href="#characters" onClick={() => {
                                setTimeout(() => {
                                    history.replaceState(null, '', window.location.pathname);
                                }, 200);
                            }}>Karakter</a>
                        </li>
                    )}
                    {isGamePage && (
                        <li>
                            <a href="#screenshots" onClick={() => {
                                setTimeout(() => {
                                    history.replaceState(null, '', window.location.pathname);
                                }, 200);
                            }}>Cuplikan</a>
                        </li>
                    )}
                    <li>
                        <a href="#contact" onClick={() => {
                            setTimeout(() => {
                                history.replaceState(null, '', window.location.pathname);
                            }, 200);
                        }}>Kontak</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}