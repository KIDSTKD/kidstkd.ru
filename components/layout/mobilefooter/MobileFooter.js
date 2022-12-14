import { useRouter } from "next/router";

import LeftSideM from "../leftside/LeftSideM";
import styles from "../mobilefooter/MobileFooter.module.css"
import Link from "next/link";


const navigation = [
    // { id: 1, title: 'menu', title2: 'menu_pressed', path: '/' },
    { id: 2, title: 'bookmark', title2: 'bookmark_pressed', path: '/05-taekwondo/blog' },
    { id: 3, title: 'home', title2: 'home_pressed', path: '/' },
    { id: 4, title: 'search', title2: 'search_pressed', path: '/search' },
    { id: 5, title: 'settings', title2: 'settings_pressed', path: '/login' }
];





const MobileFooter = () => {



    const { pathname } = useRouter();

 

    return (
        
        <>
            

            <div className={styles.mobile_footer}>
                <div className={styles.menu}>
                    <div className={styles.hidden_menu}>
                        <LeftSideM />
                    </div>

                </div> 

                {navigation.map(({ id, title, title2, path }) => (
                    <Link key={id} href={path}>
                        <div className={pathname === path ? styles[title2] : styles[title]}></div>
                    </Link>
                ))}
            </div>

        </>

        
    );
}



export default MobileFooter

