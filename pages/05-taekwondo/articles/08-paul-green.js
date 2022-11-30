import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Британский подход к тактике тхэквондо (Пол Грин)</title>
  </Head>
  <Heading text="Британский подход к тактике тхэквондо (Пол Грин)" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/08/01.jpg' objectFit='cover' layout='fill' alt='Британский подход к тактике тхэквондо (Пол Грин)'/>
    </div>
 <p>Текст</p>
  </>
)

export default Taekwondo