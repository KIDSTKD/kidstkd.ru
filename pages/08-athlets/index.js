import Head from 'next/head'


import Heading from '../../components/Heading'

import AthletList from '../../components/mainpage_slider/athlets/athletList'




const Contacts = () => (
  <>
  <Head>
    <title>KIDSTKD - Лучшие спортсмены</title>
  </Head>
  <Heading text="Лучшие спортсмены" />

  <AthletList />




  </>
)

export default Contacts