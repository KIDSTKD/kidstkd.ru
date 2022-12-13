import styles from "../02-docs/DocsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import Regulations from "./data/Regulations"


const DocsBlockRegulations = () => {
    return (
        <> 
               
        {Regulations.map(({id, img, p, etc, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.docs}>
            
            <div className={styles.docs_img}><Image src={img} width={75} height={75}  alt={p}/></div>
            <div className={styles.docs_1line}>{p}</div> 
            <div className={styles.docs_2line}>{etc}</div> 
        </div>
        </Link>

        ))}

        </>
    );
}

export default DocsBlockRegulations;

