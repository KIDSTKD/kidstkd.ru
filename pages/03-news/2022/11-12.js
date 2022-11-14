import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>12 ноября 2022 - Открытое Первенство Спортивного клуба Барсы, г. Хабаровск</title>
   </Head>
    <Heading text="12 ноября 2022 - Открытое Первенство Спортивного клуба Барсы, г. Хабаровск" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2022/11/12/01.jpg' objectFit='cover' layout='fill' alt='12 ноября 2022 - Открытое Первенство Спортивного клуба Барсы, г. Хабаровск'/>
    </div>

    <p>111</p>

    


  

  

  </>
)

export default News1