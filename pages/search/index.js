import Head from 'next/head'

import Heading from '../../components/Heading'
import Search from '../../components/search/Search'

const Search01 = () => (
  <>
    <Head>
      <title>Поиск</title>
    </Head>

    <Heading text="Поиск" />

    <div className='desktop_invisible'><Search /></div>

  </>
)

export default Search01