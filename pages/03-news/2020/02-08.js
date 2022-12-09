import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>8 февраля 2020 - Открытый Фестиваль и Первенство г. Хабаровска (пхумсэ, кёруги), г. Хабаровск</title>
   </Head>
    <Heading text="8 февраля 2020 - Открытый Фестиваль и Первенство г. Хабаровска (пхумсэ, кёруги), г. Хабаровск" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2020/02/08/01.jpg' objectFit='cover' layout='fill' alt='8 февраля 2020 - Открытый Фестиваль и Первенство г. Хабаровска (пхумсэ, кёруги), г. Хабаровск'/>
    </div>

<p>8 февраля состоялся Открытый Фестиваль и Первенство г. Хабаровска. Спортсмены состязались в 2 дисциплинах: технический комплекс пхумсэ и кёруги. Поздравляем победителей и призеров турнира.</p> 
  

  

  </>
)

export default News1