import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const SenchiloD = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.senchilod}>
                <h5 className={styles.slider__text}>Сенчило Дмитрий</h5>
                <h5 className={styles.slider__text_bottom}>КМС, Призер МСИ Дети Азии</h5>
            </div>
        </Link>

 

        </>
    );
}

export default SenchiloD;

