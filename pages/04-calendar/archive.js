import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/Heading'

const About = () => (
  <>
  <Head>
    <title>KIDSTKD - Календарь - Архив</title>
  </Head>
  <Heading text="Календарь - Архив" />

    <p><Link href={'../../../04-calendar/2023'} className='link' >Архив 2023</Link></p>
    <p><Link href={'../../../04-calendar/2022'} className='link' >Архив 2022</Link></p>
    <p><Link href={'../../../04-calendar/2021'} className='link' >Архив 2021</Link></p>
    <p><Link href={'../../../04-calendar/2020'} className='link' >Архив 2020</Link></p>

  </>
)

export default About