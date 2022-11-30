import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Жесты рефери</title>
  </Head>
  <Heading text="Жесты рефери" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/20/01.tiff' objectFit='cover' layout='fill' alt='Жесты рефери'/>
    </div>
 <p>Текст</p>
  </>
)

export default Taekwondo