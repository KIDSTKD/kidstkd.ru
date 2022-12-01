import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Правила соревнований 2022</title>
  </Head>
  <Heading text="Правила соревнований 2022" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/22/01.png' objectFit='cover' layout='fill' alt='Правила соревнований 2022'/>
    </div>
 <p>C 1 сентября вступили в силу изменения правил соревнований по тхэквондо. C полным текстом новых правил, а также со списком изменений можно ознакомиться в разделе <Link className='' href='/02-docs/04'>документы</Link>. </p>
  </>
)

export default Taekwondo