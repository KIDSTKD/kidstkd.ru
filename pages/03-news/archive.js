import Head from 'next/head'
import Link from 'next/link'

import Heading from '../../components/Heading'

const News = () => (
  <>
   <Head>
    <title>KIDSTKD - Новости - Архив</title>
   </Head>
    <Heading text="Новости - Архив" />

    <p><Link href={'../../../03-news/2022'}>Новости 2022</Link></p>
    <p><Link href={'../../../03-news/2021'}>Новости 2021</Link></p>
    <p><Link href={'../../../03-news/2020'}>Новости 2020</Link></p>
    <p><Link href={'../../../03-news/2019'}>Новости 2019</Link></p>


  

  </>
)

export default News