import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>История изменения правил тхэквондо</title>
  </Head>
  <Heading text="История изменения правил тхэквондо" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/15/01.jpg' objectFit='cover' layout='fill' alt='История изменения правил тхэквондо'/>
    </div>
 <p>Текст</p>
  </>
)

export default Taekwondo