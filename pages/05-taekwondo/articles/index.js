import Head from 'next/head'

import Heading from '../../../components/Heading'
import ArticlesBlock from '../../../components/05-taekwondo/articles/articles'

const Taekwondo = () => (
  <>
  <Head>
    <title>Блог</title>
  </Head>
  <Heading text="Блог" />
  <ArticlesBlock />

  </>
)

export default Taekwondo