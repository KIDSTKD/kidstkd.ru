import styles from "../athlets/Athlets.module.css"
import Link from "next/link";



const UkhabotinI = () => {
    return (
        <> 
               
            
            <Link href='/08-athlets'> 
            <div className={styles.ukhabotini}>
                <h5 className={styles.slider__text}>Ухаботин Иван</h5>
                <h5 className={styles.slider__text_bottom}>II разряд, Победитель первенства ПК, Призер первенства ДФО</h5>
            </div>
        </Link>

 

        </>
    );
}

export default UkhabotinI;

