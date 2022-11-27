import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const FedusenkoA = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.fedusenkoa}>
                <h5 className={styles.slider__text}>Федусенко Андрей</h5>
                <h5 className={styles.slider__text_bottom}>II разряд, Призер Чемпионата России</h5>
            </div>
        </Link>

 

        </>
    );
}

export default FedusenkoA;

