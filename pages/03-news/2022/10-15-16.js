import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>15-16 октября 2022 - Региональный судейский семинар, г. Хабаровск</title>
   </Head>
    <Heading text="15-16 октября 2022 - Региональный судейский семинар, г. Хабаровск" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2022/10/15-16/01.jpg' objectFit='cover' layout='fill' alt='15-16 октября 2022 - Региональный судейский семинар, г. Хабаровск'/>
    </div>

    <p>15-16 октября в г. Хабаровске прошел региональных судейский семинар под руководством Ким Дениса Чунгириевича – судьи международной категории. В течении двух дней проводились теоретические и практические занятия, направленные на изучение новых нюансов правил, принятых в этом году.</p>
 
  

  

  </>
)

export default News1