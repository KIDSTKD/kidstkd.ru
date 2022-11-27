import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const KhvanA = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.khvana}>
                <h5 className={styles.slider__text}>Хван Александра</h5>
                <h5 className={styles.slider__text_bottom}>I разряд, Победитель Первенства России</h5>
            </div>
        </Link>

 

        </>
    );
}

export default KhvanA;

