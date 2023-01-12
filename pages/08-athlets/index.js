import Head from 'next/head'


import Heading from '../../components/Heading'
import AthletList from '../../components/mainpage_slider/athlets/athletlist'




const Contacts = () => (
  <>
  <Head>
    <title>KIDSTKD - Лучшие спортсмены</title>
    <meta name="description" content="Лучшие спортсмены" key="description"/>

  </Head>
  <Heading text="Лучшие спортсмены" />

  <AthletList />




  </>
)

export default Contacts