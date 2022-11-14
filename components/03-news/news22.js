import styles from "../03-news/NewsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import News22 from "./data/2022.js"


const NewsBlock = () => {
    return (
        <> 
               
        {News22.map(({id, path, date, place, title, p, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.news}>
            
            <div className={styles.news_img}><Image src={path} objectFit='cover' layout='fill' alt={title}/></div>
            <div className={styles.news_header}>{date} - {title} ({place})</div>
            <div className={styles.news_p}><p>{p}</p></div> 
        </div>
        </Link>

        ))}

        </>
    );
}

export default NewsBlock;

