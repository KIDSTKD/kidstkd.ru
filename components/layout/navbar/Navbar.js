import styles from "../navbar/Navbar.module.css"
import Link from "next/link";

import { useRouter } from "next/router";


const navigation_top = [
    { id: 1, title: 'search', path: '/search',},
    { id: 2, title: 'mail', path: 'mail' },
    { id: 3, title: 'inst', path: 'inst' },
    { id: 4, title: 'youtube', path: 'YT' },
];

const Navbar = () => {

    const { pathname } = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__text}>
                <a>О Нас</a>
                <a>Новости</a>
                <a>Контакты</a>
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