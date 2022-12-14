import styles from "../07-contacts/ContactBlock.module.css"
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/svg/07/contacts_logo.svg'


const ContactBlockMikhaylovkaDS = () => {
    return (

    <>


        <div className={styles.contact_block}>
            <div className={styles.contact_logo}>
                <Image src={Logo} objectFit='contain' layout='fill' alt="Контакты"/>
            </div>
            <div className={styles.contact_name}><h2 className={styles.header}>c. Михайловка, ДС &#34;Светлячок&#34; </h2></div>
            <div className={styles.contact_address}><p className={styles.text}>ул. 2-я Краснознаменская , 51</p></div>
            <div className={styles.contact_etc}><p className={styles.text}>Тренер: <Link className='link' href='../01-about-us/coach'>Салатский С.В.</Link>, тел. <a href="tel:+79644432986">+7(964)443 29 86</a></p></div>
            <div className={styles.contact_schedule}>
                <div>
                    <p>Вторник</p>
                    <p>17:00-18:00</p>

                </div>

                <div>
                    <p>Четверг</p>
                    <p>17:00-18:00</p>

                </div>


            </div>
            <div className={styles.contact_map}>
                <div>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CCUjy4bWtD" width="100%" height="380" frameBorder="0" allowfullscreen="true"></iframe>
                </div>
            </div>
        </div>

        
    </>
    
    );
}

export default ContactBlockMikhaylovkaDS;

