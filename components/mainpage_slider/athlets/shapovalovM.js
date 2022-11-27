import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const ShapovalovM = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.shapovalovm}>
                <h5 className={styles.slider__text}>Шаповалов Марк</h5>
                <h5 className={styles.slider__text_bottom}>II разряд, Прризер первенства ПК, ДФО, всероссийских соревнований</h5>
            </div>
        </Link>

 

        </>
    );
}

export default ShapovalovM;

