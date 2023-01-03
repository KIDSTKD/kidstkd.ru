import styles from "../athlets/Athlet.module.css"
import Link from "next/link";
import Image from "next/legacy/image";

import AthletsData from "./AthletsData";


import BG1 from '../../../public/svg/bg/top_blue.svg'
import BG2 from '../../../public/svg/bg/bg_narrow.svg'



const Athlet = () => {
    return (
        <> 
               
        {AthletsData.map(({id, athletImg, athletName, grade, title, link}) => (
            
               
            
            <Link key={id} href={link}> 
            <div className={styles.athlet_block}>


                <Image className={styles.athlet_block__img} src={athletImg} alt={athletName} width={350} height={350} />
                <div className={styles.athlet_block__bg1}><Image src={BG1} alt={athletName} /></div>
                <div className={styles.athlet_block__bg2}><Image src={BG2} alt={athletName} /></div>

                <h4 className={styles.athlet_block__name}>{athletName}</h4>
                <h4 className={styles.athlet_block__etc}>{grade}, {title}</h4>
            </div>
        </Link>

        ))}
        </>
    );
}

export default Athlet;

