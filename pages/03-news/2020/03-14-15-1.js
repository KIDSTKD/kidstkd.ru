import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>14-15 марта 2020 - Первенство Приморского края (кёруги), г. Владивосток</title>
   </Head>
    <Heading text="14-15 марта 2020 - Первенство Приморского края (кёруги), г. Владивосток" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2020/03/14-15/01.jpg' objectFit='cover' layout='fill' alt='14-15 марта 2020 - Первенство Приморского края (кёруги), г. Владивосток'/>
    </div>

<p>14-15 марта в Краевом Доме Физкультуры прошел Чемпионат и Первенство Приморского края по тхэквондо, кёруги. По итогам соревнований Ким Екатерина заняла 1 место в весовой категории до 52 кг. среди юниорок, Джафарова Илаха заняла 2 место в весовой категории до 55 кг. среди юниорок.</p> 


  

  

  </>
)

export default News1