import styles from "../navbar/Navbar.module.css"
import Link from "next/link";

import { useRouter } from "next/router";


const navigation_top = [
    { id: 1, title: 'search', path: '/search',},
    { id: 2, title: 'mail', path: 'mail' },
    { id: 3, title: 'inst', path: 'inst' },
    { id: 4, title: 'youtube', path: 'https://www.youtube.com/@kidstkdtaekwondo2028' },
];

const Navbar = () => {

    const { pathname } = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__text}>
                <Link href={/01-about-us/}>О Нас</Link>
                <Link href={/03-news/}>Новости</Link>
                <Link href={/07-contacts/}>Контакты</Link>
            </div>

            
                    <input type="text" />
                


                    <div className={styles.header__icons}>
                {navigation_top.map(({ id, title, path }) => (
                    <Link key={id} href={path}>
                        <div className={styles[title]}></div>
                    </Link>

                ))}
            </div>
                    

        </nav>
    );
};

export default Navbar;