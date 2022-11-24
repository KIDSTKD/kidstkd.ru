import styles from "../logo/Logo.module.css"
import Link from "next/link";
import Image from "next/legacy/image";

import Logoimg from '../../../public/img/logo.png'



const Logo = () => (
    <>
    <Link href="/">
        <div className={styles.logo}>
        <Image src={Logoimg} alt="Тхэквондо в Уссурийске"/>
        </div>
    </Link>
    </>
);

export default Logo