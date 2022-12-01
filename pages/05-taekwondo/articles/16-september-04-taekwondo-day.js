import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>4 Сентября - День Тхэквондо</title>
  </Head>
  <Heading text="4 Сентября - День Тхэквондо" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/16/01.png' objectFit='cover' layout='fill' alt='4 Сентября - День Тхэквондо'/>
    </div>
    <p>В 1994 году, 4 сентября, в Париже, решением Международного Олимпийского Комитета (МОК) тхэквондо стала официальным видом спорта. В память об этом знаменательном событии в мире тхэквондо, начиная с 2006 года, ежегодно, празднуется международный день тхэквондо.</p>
    <p>В этом году для любителей тхэквондо в г. Сеул (Р. Корея) пройдет фестиваль под девизом: «Одно тхэквондо – один Мир». На фестивале можно будет увидеть не только красочное шоу и показательные выступления. Организаторы в лице Всемирной Федерации Тхэквондо и Глобального Фонда Развития тхэквондо, пригласили на фестиваль звёзд жанра «K-Pop» и медалистов Олимпиады в Рио из сборной Кореи.</p>
    <p>Мы, в свою очередь, поздравляем с праздником всех любителей тхэквондо, и желаем успеха!</p>
  </>
)

export default Taekwondo