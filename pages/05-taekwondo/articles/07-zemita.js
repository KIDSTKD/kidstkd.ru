import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Электронное оборудование Zemita</title>
  </Head>
  <Heading text="Электронное оборудование Zemita" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/07/01.png' objectFit='cover' layout='fill' alt='Электронное оборудование Zemita'/>
    </div>
 <p>Текст</p>
  </>
)

export default Taekwondo