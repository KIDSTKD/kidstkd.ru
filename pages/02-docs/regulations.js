import Head from 'next/head'

import Heading from '../../components/Heading'
import DocsBlockRegulations from '../../components/02-docs/DocsBlockRegulations'

const About = () => (
  <>
  <Head>
  <title>KIDSTKD - Нормативные документы</title>
  </Head>
  <Heading text="Нормативные документы" />
  <DocsBlockRegulations />
  </>
)

export default About