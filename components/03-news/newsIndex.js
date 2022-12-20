import styles from "../03-news/NewsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import News23 from "./data/2023.js"
import News22 from "./data/2022.js"

const NewsAll = [...News23, ...News22];


let NewsLast6 = NewsAll.slice(-0,6)


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

