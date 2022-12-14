import styles from "../07-contacts/ContactBlock.module.css"
import Image from "next/image";

import Logo from '../../public/svg/07/contacts_logo.svg'


const ContactBlockDS246 = () => {
    return (

    <>




        <div className={styles.contact_block}>
            <div className={styles.contact_logo}>
                <Image src={Logo} objectFit='contain' layout='fill' alt="Контакты" />
            </div>
            <div className={styles.contact_name}><h2 className={styles.header}>Уссурийск, Детский сад N 246</h2></div>
            <div className={styles.contact_address}><p className={styles.text}>ул. Октябрьская, 189</p></div>
            <div className={styles.contact_etc}><p className={styles.text}>Тренер: Салатский С.В., тел. <a href="tel:+79644432986">+7(964)443 29 86</a></p></div>
            <div className={styles.contact_schedule}>
                <div>
                    <p>Среда</p>
                    <p>15:00-15:45</p>
                </div>

                <div>
                    <p>Пятница</p>
                    <p>9:00-9:45</p>
                </div>

            </div>
            <div className={styles.contact_map}>
                <div>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CCUjyYxz8B" width="100%" height="380" frameBorder="0" allowfullscreen="true"></iframe>
                </div>
            </div>
        </div>


        
    </>
    
    );
}

export default ContactBlockDS246;

