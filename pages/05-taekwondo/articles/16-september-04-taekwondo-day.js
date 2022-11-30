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
 <p>Текст</p>
  </>
)

export default Taekwondo