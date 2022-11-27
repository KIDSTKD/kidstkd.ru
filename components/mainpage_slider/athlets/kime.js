import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const KimE = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.kime}>
                <h5 className={styles.slider__text}>Ким Екатерина</h5>
                <h5 className={styles.slider__text_bottom}>КМС, Победитель первенство ПК, ДВО, всероссийских соревнований</h5>
            </div>
        </Link>

 

        </>
    );
}

export default KimE;

