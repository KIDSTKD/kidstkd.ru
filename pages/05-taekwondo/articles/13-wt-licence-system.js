import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Лицензирование</title>
  </Head>
  <Heading text="Лицензирование" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/13/01.png' objectFit='cover' layout='fill' alt='Лицензирование'/>
    </div>
 <p>Текст</p>
  </>
)

export default Taekwondo