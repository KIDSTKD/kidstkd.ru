import Head from 'next/head'

import Heading from '../../components/Heading'
import NewsBlock from '../../components/03-news/news'

const News = () => (
  <>
   <Head>
    <title>KIDSTKD - Новости</title>
   </Head>
    <Heading text="Новости" />
    <NewsBlock />

  

  </>
)

export default News