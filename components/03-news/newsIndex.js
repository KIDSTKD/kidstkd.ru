import styles from "../03-news/NewsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import News22 from "./data/2022.js"
import News21 from "./data/2021.js"

const NewsAll = [...News22, ...News21];


var NewsLast6 = NewsAll.slice(-0,6)


const NewsBlock = () => {
    return (
        <> 
               
        {NewsLast6.map(({id, path, date, place, title, p, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.news}>
            
            <div className={styles.news_img}><Image src={path} objectFit='cover' layout='fill' alt={title}/></div>
            <div className={styles.news_header}>{date} - {title} ({place})</div>
            <p className={styles.news_p}>{p}</p> 
        </div>
        </Link>

        ))}

        </>
    );
}

export default NewsBlock;

