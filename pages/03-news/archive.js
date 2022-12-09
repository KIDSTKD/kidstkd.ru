import Head from 'next/head'
import Link from 'next/link'

import Heading from '../../components/Heading'

const News = () => (
  <>
   <Head>
    <title>KIDSTKD - Новости - Архив</title>
   </Head>
    <Heading text="KIDSTKD - Новости - Архив" />

    <Link href={../../2019}>Новости 2022</Link>


  

  </>
)

export default News