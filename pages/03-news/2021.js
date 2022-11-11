import Head from 'next/head'

import Heading from '../../components/Heading'
import NewsBlock from '../../components/03-news/news21'

const News = () => (
  <>
   <Head>
    <title>KIDSTKD - Новости 2021</title>
   </Head>
    <Heading text="Новости 2021" />
    <NewsBlock />

  

  </>
)

export default News