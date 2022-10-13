import styles from "../04-calendar/Month.module.css"


const Month = ({ text }) => {
    return (
    <div className={styles.month}>{text}</div>
    
    );
}

export default Month;

