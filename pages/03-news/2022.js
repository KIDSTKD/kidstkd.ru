import Head from 'next/head'

import Heading from '../../components/Heading'
import NewsBlock from '../../components/03-news/news'

const News = () => (
  <>
   <Head>
    <title>KIDSTKD - Новости 2022</title>
   </Head>
    <Heading text="Новости 2022" />
    <NewsBlock />

  

  </>
)

export default News