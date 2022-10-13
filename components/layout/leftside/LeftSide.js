import Router, { useRouter } from "next/router";

import styles from "../leftside/LeftSide.module.css"
import Link from "next/link";

import { SidebarData } from "./sidebarData";


const AboutLink = [
    {title2: "Куда отдать ребенка?", path2: "/01-about-us/01"},
    {title2: "Тхэквондо для детей", path2: "/01-about-us/02"},
    {title2: "Аттестация", path2: "/01-about-us/03"},
    {title2: "УОЛ и УТМ", path2: "/01-about-us/04"},
    {title2: "Расписание занятий", path2: "/01-about-us/05"},
    {title2: "Тренерский коллектив", path2: "/01-about-us/06"}
]

const DocsLink = [
    {title2: "Федеральные законы", path2: "/02-docs/01"},
    {title2: "Указы, распоряжеиня, постановления", path2: "/02-docs/02"},
    {title2: "Приказы минспорта РФ", path2: "/02-docs/03"},
    {title2: "Документы СТР", path2: "/02-docs/04"},
    {title2: "Приказы Минспорта ПК", path2: "/02-docs/05"},
    {title2: "Правила соревнований", path2: "/02-docs/06"},
    {title2: "Положение и протоколы", path2: "/02-docs/07"},
    {title2: "Прочее", path2: "/02-docs/08"},

]

const NewsLink = [
    {title2: "2022", path2: "/03-news/2022"},
    {title2: "2021", path2: "/03-news/2021"},
    {title2: "2020", path2: "/03-news/2020"},
    {title2: "2019", path2: "/03-news/2019"},
    {title2: "...архив...", path2: "/"},
]

const CalendarLink = [
    {title2: "2022", path2: "/04-calendar/2022"},
    {title2: "2021", path2: "/04-calendar/2021"},
    {title2: "2020", path2: "/04-calendar/2020"},
    {title2: "2019", path2: "/04-calendar/2019"},
    {title2: "...архив...", path2: "/04-calendar/archive"},
]

const TaekwondoLink = [
    {title2: "Что такое тхэквондо", path2: "/"},
    {title2: "История тхэквондо", path2: "/"},
    {title2: "Терминология", path2: "/"},
    {title2: "Правила соревнований", path2: "/"},
    {title2: "Базовая техника", path2: "/"},
    {title2: "Пхумсэ", path2: "/"},
    {title2: "Блог", path2: "/"},
]


const LeftSide = () => {

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
                    <Link href={path2}>
                    <p className={pathname.includes('01-about') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                    </Link>
                ))}

                {DocsLink.map(({ title2, path2 }) => (
                   <Link href={path2}>
                    <p className={pathname.includes('02-docs') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                {NewsLink.map(({ title2, path2 }) => (
                   <Link href={path2}>
                    <p className={pathname.includes('03-news') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                {CalendarLink.map(({ title2, path2 }) => (  
                   <Link href={path2}>
                    <p className={pathname.includes('04-calendar') ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                {TaekwondoLink.map(({ title2, path2 }) => (
                   <Link href={path2}>
                   <p className={pathname === "/05-taekwondo" ? styles.left_item_second_level : styles.invisible}>{title2}</p>
                   </Link>
               ))}

                </div>  

                    </>     

                ))}
            </div>  

            
            );
}



export default LeftSide

