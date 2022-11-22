import styles from "../02-docs/DocsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import Docs01 from "./data/01.js"


const DocsBlock01 = () => {
    return (
        <> 
               
        {Docs01.map(({id, img, p, number, date, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.docs}>
            
            <div className={styles.docs_img}><Image src={img} objectFit='cover' layout='fill' alt={p}/></div>
            <div className={styles.docs_1line}>{p}</div> 
            <div className={styles.docs_2line}>{number}</div> 
            <div className={styles.docs_3line}>Дата принятия: {date}</div> 
        </div>
        </Link>

        ))}

        </>
    );
}

export default DocsBlock01;

