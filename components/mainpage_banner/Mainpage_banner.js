import styles from "../mainpage_banner/Mainpage_banner.module.css"
import img1 from '../../public/svg/banner/01.svg'
import img2 from '../../public/svg/banner/02.svg'
import img3 from '../../public/svg/banner/03.svg'
import img4 from '../../public/svg/banner/04.svg'

import Image from "next/image";

const Banner = () => (
    <>
        <div className={styles.main_banner}>
            <Image src={img1} alt='KIDSTKD'  className={styles.banner} />
            <Image src={img2} alt='KIDSTKD'  className={styles.banner} />
            <Image src={img3} alt='KIDSTKD'  className={styles.banner} />
            <Image src={img4} alt='KIDSTKD'  className={styles.banner} />
        </div>
    </>



);

export default Banner