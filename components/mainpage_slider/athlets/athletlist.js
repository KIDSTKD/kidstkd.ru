import styles from "../athlets/Athletslist.module.css"
import Link from "next/link";
import Image from "next/image";

import AthletsData from "./AthletsData";


const AthletList = () => {
    return (
        <> 
               
        {AthletsData.map(({id, athletImg, athletName, grade, title, link}) => (
            
            <Link key={id} href={link}> 
                <div className={styles.athletlist_block}>
                    <Image className={styles.athletlist_block__img} src={athletImg} alt={athletName} width={100} height={160}/>
                    <h4 className={styles.athletlist_block__name}>{athletName}</h4>
                    <p className={styles.athletlist_block__etc}>{grade}, {title}</p> 
                </div>
            </Link>

        ))}
        </>
    );
}

export default AthletList;

