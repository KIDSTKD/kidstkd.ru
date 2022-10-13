import styles from "../mainpage_slider/Mainpage_slider.module.css"



const Slider = () => (
    <>
        <div className={styles.main_slider}>
		    <div className={styles.main_slider_item}>
                <h5 className={styles.slider__text}>Ким Екатерина</h5>
                <h5 className={styles.slider__text_bottom}>КМС, Победитель Первенства ДФО, ПК, Всероссийских соревнований</h5>
            </div>
		    <div className={styles.main_slider_item}>
                <h5 className={styles.slider__text}>Федусенко Георгий</h5>
                <h5 className={styles.slider__text_bottom}>I р., Призер Первенства ДФО, ПК, Всероссийских соревнований</h5>
            </div>
		    <div className={styles.main_slider_item}>
                <h5 className={styles.slider__text}>Хван Александра</h5>
                <h5 className={styles.slider__text_bottom}>I р., Призер Первенства ДФО, ПК, Всероссийских соревнований</h5>
            </div>
		    <div className={styles.main_slider_item}>
                <h5 className={styles.slider__text}>Федусенко Андрей</h5>
                <h5 className={styles.slider__text_bottom}>II р., Победитель Первенства ДФО, ПК, Всероссийских соревнований</h5>
            </div>
		    <div className={styles.main_slider_item}>
                <h5 className={styles.slider__text}>Джафарова Илаха</h5>
                <h5 className={styles.slider__text_bottom}>КМС, Победитель Первенства ДФО, ПК, Всероссийских соревнований</h5>
            </div>
		    <div className={styles.main_slider_item}>
                <h5 className={styles.slider__text}>Шаповалов Марк</h5>
                <h5 className={styles.slider__text_bottom}>II р., Призер Первенства ДФО, ПК, Всероссийских соревнований</h5>
            </div>
		</div>
    </>
);

export default Slider