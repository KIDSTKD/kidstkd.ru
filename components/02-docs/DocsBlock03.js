import styles from "../02-docs/DocsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import Docs03 from "./data/03.js"


const DocsBlock03 = () => {
    return (
        <> 
               
        {Docs03.map(({id, img, p, number, date, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.docs}>
            
            <div className={styles.docs_img}><Image src={img} width={75} height={75} alt={p}/></div>
            <div className={styles.docs_1line}>{p}</div> 
            <div className={styles.docs_2line}>{number}, {date}</div> 
        </div>
        </Link>

        ))}

        </>
    );
}

export default DocsBlock03;

