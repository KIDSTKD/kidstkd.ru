import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const JafarovaI = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.jafarovai}>
                <h5 className={styles.slider__text}>Джафарова Илаха</h5>
                <h5 className={styles.slider__text_bottom}>КМС, Победитель первенство ПК, ДВО, всероссийских соревнований</h5>
            </div>
        </Link>

 

        </>
    );
}

export default JafarovaI;

