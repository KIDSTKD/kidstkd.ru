import styles from "../mainpage_massage/Mainpage_massage.module.css"

import WA from '../../public/svg/massage/whatsapp.svg'
import TG from '../../public/svg/massage/telegram.svg'
import TP from '../../public/svg/massage/telephone.svg'


import Image from "next/image";
import Link from "next/link";



const Massage = () => (
    <>
        <div className={styles.massage_block}>
            <div className={styles.header}>Записаться на пробное занятие</div>
            <div className={styles.icons}>
                <Link href="http://wa.me/79644432986"><Image src={WA} alt='Записаться на пробное занятие'  className={styles.img} /></Link>
                <Link href="https://t.me/salatsky"><Image src={TG} alt='Записаться на пробное занятие'  className={styles.img} /></Link>
                <Link href="tel:+79644432986"><Image src={TP} alt='Записаться на пробное занятие'  className={styles.img} /></Link>
            </div>



        </div>
    </>



);

export default Massage