import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Электронная система судейства Daedo PSS</title>
  </Head>
  <Heading text="Электронная система судейства Daedo PSS" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/05/01.png' objectFit='cover' layout='fill' alt='Электронная система судейства Daedo PSS'/>
    </div>
 <p>Текст</p>
  </>
)

export default Taekwondo