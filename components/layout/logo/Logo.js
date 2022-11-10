import styles from "../logo/Logo.module.css"
import Link from "next/link";
import Image from "next/image";


const Logo = () => (
    <>
    <Link href="/">
        <div className={styles.logo}>
        <Image src='/img/logo.png' objectFit='contain' layout='fill'/>
        </div>
    </Link>
    </>
);

export default Logo