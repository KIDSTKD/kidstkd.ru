import styles from "../logo/Logo.module.css"
import Link from "next/link";
const Logo = () => (
    <>
    <Link href="/">
        <div className={styles.logo}> </div>
    </Link>
    </>
);

export default Logo