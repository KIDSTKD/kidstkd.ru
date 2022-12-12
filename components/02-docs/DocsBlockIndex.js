import styles from "../02-docs/DocsBlock.module.css"
import Image from "next/legacy/image";
import Link from "next/link";

import Docs01 from "./data/01.js"
import Docs02 from "./data/02.js"
import Docs03 from "./data/03.js"
import Docs04 from "./data/04.js"
import Docs05 from "./data/05.js"
import Docs06 from "./data/06.js"

let Docs01Sliced = Docs01.slice(-0,2)
let Docs02Sliced = Docs02.slice(-0,2)
let Docs03Sliced = Docs03.slice(-0,2)
let Docs04Sliced = Docs04.slice(-0,2)
let Docs05Sliced = Docs05.slice(-0,2)
let Docs06Sliced = Docs06.slice(-0,2)



const DocsBlockIndex = () => {
    return (
       
        <>    

        <Link href='../02-docs/01'><h2>Федеральные законы</h2></Link>
        {Docs01Sliced.map(({id, img, p, number, date, link}) => (
            <Link key={id} href={link}> 

                <div className={styles.docs}>
                    <div className={styles.docs_img}><Image src={img} width={75} height={75} alt={p}/></div>
                    <div className={styles.docs_1line}>{p}</div> 
                    <div className={styles.docs_2line}>{number}, дата принятия: {date}</div> 
                </div>

            </Link>
        ))}
        <Link href='../02-docs/02'><h2>Наградные приказы</h2></Link> 

        {Docs02Sliced.map(({id, img, p, number, date, link}) => (
            <Link key={id} href={link}> 
                <div className={styles.docs}>
                    <div className={styles.docs_img}><Image src={img} width={75} height={75} alt={p}/></div>
                    <div className={styles.docs_1line}>{p}</div> 
                   <div className={styles.docs_2line}>{number}, приказ от {date}</div> 
                </div>
            </Link>
        ))}     
        <Link href='../02-docs/03'><h2>Положения и протоколы</h2></Link>

{Docs03Sliced.map(({id, img, p, number, date, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.docs}>
            
            <div className={styles.docs_img}><Image src={img} width={75} height={75} alt={p}/></div>
            <div className={styles.docs_1line}>{p}</div> 
            <div className={styles.docs_2line}>{number}, {date}</div> 
        </div>
        </Link>

        ))}
        <Link href='../02-docs/04'><h2>Правила соревнований</h2>  </Link> 

{Docs04Sliced.map(({id, img, p, number, date, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.docs}>
            
            <div className={styles.docs_img}><Image src={img} width={75} height={75} alt={p}/></div>
            <div className={styles.docs_1line}>{p}</div> 
            <div className={styles.docs_2line}>{date}, {number}</div> 
        </div>
        </Link>

        ))}
       <Link href='../02-docs/05'> <h2>Секритариат, E-PSS</h2>   </Link>

{Docs05Sliced.map(({id, img, p, number, date, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.docs}>
            
            <div className={styles.docs_img}><Image src={img} width={75} height={75}  alt={p}/></div>
            <div className={styles.docs_1line}>{p}</div> 
            <div className={styles.docs_2line}>{date}, {number}</div> 
        </div>
        </Link>

        ))}
       <Link href='../02-docs/06'> <h2>Прочее</h2>   </Link>

{Docs06Sliced.map(({id, img, p, etc, link}) => (
            
            <Link key={id} href={link}> 

        <div className={styles.docs}>
            
            <div className={styles.docs_img}><Image src={img} width={75} height={75}  alt={p}/></div>
            <div className={styles.docs_1line}>{p}</div> 
            <div className={styles.docs_2line}>{etc}</div> 
        </div>
        </Link>

        ))}
        </>

      

    );
}

export default DocsBlockIndex;

