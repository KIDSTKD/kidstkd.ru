import styles from "../07-contacts/ContactBlock.module.css"
import Image from "next/image";

import Logo from '../../public/svg/07/contacts_logo.svg'


const ContactBlockMikhailovka = () => {
    return (

    <>

  


     

        <div className={styles.contact_block}>
            <div className={styles.contact_logo}>
                <Image src={Logo} objectFit='contain' layout='fill' alt="Контакты" />
            </div>
            <div className={styles.contact_name}><h2 className={styles.header}>c. Михайловка, ДЮСШ</h2></div>
            <div className={styles.contact_address}><p className={styles.text}>ул. Ленинская, 38</p></div>
            <div className={styles.contact_etc}><p className={styles.text}>Тренер: Салатский С.В., тел. <a href="tel:+79644432986">+7(964)443 29 86</a></p></div>
            <div className={styles.contact_schedule}>
                <div>
                    <p>Вторник</p>
                    <p>10:00-11:30</p>
                    <p>14:00-15:30</p>
                    <p>15:30-17:00</p>
                </div>

                <div>
                    <p>Четверг</p>
                    <p>10:00-11:30</p>
                    <p>14:00-15:30</p>
                    <p>15:30-17:00</p>
                </div>

                <div>
                    <p>Суббота</p>
                    <p>9:00-10:30</p>
                    <p>10:30-12:00</p>
                </div>

            </div>
            <div className={styles.contact_map}>
                <div>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CCUjy4F9WD" width="100%" height="380" frameBorder="0" allowfullscreen="true"></iframe>
                </div>
            </div>
        </div>

     

        
    </>
    
    );
}

export default ContactBlockMikhailovka;

