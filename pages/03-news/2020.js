import Head from 'next/head'

import Heading from '../../components/Heading'
import NewsBlock from '../../components/03-news/news20'

const News = () => (
  <>
   <Head>
    <title>KIDSTKD - Новости 2020</title>
   </Head>
    <Heading text="Новости 2020" />
    <NewsBlock />

  

  </>
)

export default News