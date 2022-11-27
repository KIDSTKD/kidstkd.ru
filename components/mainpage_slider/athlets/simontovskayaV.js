import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const SimontovskayaV = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.simontovskayav}>
                <h5 className={styles.slider__text}>Симонтовская Виктория</h5>
                <h5 className={styles.slider__text_bottom}>II разряд, Победитель первенства ПК, ДФО</h5>
            </div>
        </Link>

 

        </>
    );
}

export default SimontovskayaV;

