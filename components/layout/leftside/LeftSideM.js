import Router, { useRouter } from "next/router";

import styles from "../mobilefooter/MobileFooter.module.css"
import Link from "next/link";

import { SidebarData } from "./sidebarData";
import { AboutLink } from "./sidebarData";
import { DocsLink } from "./sidebarData";
import { NewsLink } from "./sidebarData";
import { CalendarLink } from "./sidebarData";
import { TaekwondoLink } from "./sidebarData";






const LeftSideM = () => {

    const { pathname } = useRouter();
    return (
            
            <div className={styles.left_side}>
                {SidebarData.map(({ id, title, path}) => (
                   <> 
                   <Link key={id} href={path}>
                        <div className={pathname == path ? styles.left_item2 : styles.left_item}>{title}</div>
                    </Link> 

                <div className={pathname.includes(path) ? styles.display : styles.invisible}>
               
                {AboutLink.map(({ title2, path2 }) => ( 
                    <Link key={id} href={path2}>
                    <p className={pathname.includes('01-about') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                    </Link>
                ))}

                {DocsLink.map(({ title2, path2 }) => (
                   <Link key={id} href={path2}>
                    <p className={pathname.includes('02-docs') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                {NewsLink.map(({ title2, path2 }) => (
                   <Link key={id} href={path2}>
                    <p className={pathname.includes('03-news') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                {CalendarLink.map(({ title2, path2 }) => (  
                   <Link key={id} href={path2}>
                    <p className={pathname.includes('04-calendar') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                {TaekwondoLink.map(({ title2, path2 }) => (
                   <Link key={id} href={path2}>
                   <p className={pathname === "/05-taekwondo" ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                </div>  

                    </>     

                ))}
            </div>  

            
            );
}



export default LeftSideM

