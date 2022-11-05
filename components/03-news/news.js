import styles from "../03-news/NewsBlock.module.css"
import Image from "next/image";

import News22 from "../03-news/data/2022.js"


const NewsBlock = () => {
    return (
        <>        
        {News22.map(({id, path, title, p}) => (
        <div className={styles.news} key={id}>   
            <div className={styles.news_img}><Image src={path} objectFit='cover' layout='fill'/></div>
            <div className={styles.news_header}>{title}</div>
            <div className={styles.news_p}><p>{p}</p></div>
            
        </div>))}

        </>
    );
}

export default NewsBlock;

