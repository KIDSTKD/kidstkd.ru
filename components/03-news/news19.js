import styles from "../03-news/NewsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import News19 from "./data/2019.js"


const NewsBlock = () => {
    return (
        <> 
               
        {News19.map(({id, path, date, place, title, p, link}) => (
            
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
