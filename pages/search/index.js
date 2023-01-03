import Head from 'next/head'

import Heading from '../../components/Heading'
import Search from '../../components/search/Search'

const About = () => (
  <>
    <Head>
      <title>Тхэквондо в Уссурийске</title>
    </Head>

    <Heading text="Поиск" />


    <Search />


  </>
)

export default About