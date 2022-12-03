import Head from 'next/head'

import Heading from '../../../components/Heading'
import ArticlesBlock from '../../../components/05-taekwondo/articles/articles'

const Taekwondo = () => (
  <>
  <Head>
    <title>Публикации</title>
  </Head>
  <Heading text="Публикации" />
  <ArticlesBlock />

  </>
)

export default Taekwondo