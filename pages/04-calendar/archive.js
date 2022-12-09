import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/Heading'

const About = () => (
  <>
  <Head>
    <title>KIDSTKD - Календарь - Архив</title>
  </Head>
  <Heading text="Архив" />

    <p><Link href={'../../../04-calendar/2022'}>Архив 2022</Link></p>
    <p><Link href={'../../../03-calendar/2021'}>Архив 2021</Link></p>
    <p><Link href={'../../../03-calendar/2020'}>Архив 2020</Link></p>
    <p><Link href={'../../../03-calendar/2019'}>Архив 2019</Link></p>

  </>
)

export default About