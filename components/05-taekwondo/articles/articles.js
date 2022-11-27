import styles from "../../05-taekwondo/articles/ArticlesBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import ArticlesData from "./articlesData"


const ArticlesBlock = () => {
    return (
        <> 
               
        {ArticlesData.map(({id, img, title, p, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.articles}>
            
            <div className={styles.articles_img}><Image src={img} objectFit='cover' layout='fill' alt={title}/></div>
            <div className={styles.articles_header}>{title}</div>
            <p className={styles.articles_p}>{p}</p> 
        </div>
        </Link>

        ))}

        </>
    );
}

export default ArticlesBlock;

