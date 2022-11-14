import styles from "../03-news/NewsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import News21 from "./data/2021.js"


const NewsBlock = () => {
    return (
        <> 
               
               {News21.map(({id, path, date, place, title, p, link}) => (
            
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

