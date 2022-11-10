import styles from "../logo/Logo.module.css"
import Link from "next/link";
import Image from "next/legacy/image";


const Logo = () => (
    <>
    <Link href="/">
        <div className={styles.logo}>
        <Image src='/img/logo.png' objectFit='contain' layout='fill' alt="Тхэквондо в Уссурийске["/>
        </div>
    </Link>
    </>
);

export default Logo