import Head from 'next/head'
import Link from 'next/link'

import Heading from '../../components/Heading'

const News = () => (
  <>
   <Head>
    <title>KIDSTKD - Новости - Архив</title>
   </Head>
    <Heading text="Новости - Архив" />

    <p><Link href={'../../../03-news/2023'} className='link' >Новости 2023</Link></p>
    <p><Link href={'../../../03-news/2022'} className='link' >Новости 2022</Link></p>
    <p><Link href={'../../../03-news/2021'} className='link' >Новости 2021</Link></p>
    <p><Link href={'../../../03-news/2020'} className='link' >Новости 2020</Link></p>
    <p><Link href={'../../../03-news/2019'} className='link' >Новости 2019</Link></p>


  

  </>
)

export default News