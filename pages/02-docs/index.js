import Head from 'next/head'
import DocsBlockIndex from '../../components/02-docs/DocsBlockIndex'
import Heading from '../../components/Heading'

const Documents = () => (
  <>
  <Head>
    <title>KIDSTKD - Докуменеты</title>
    <meta name="description" content="Документы: Нормативные документы, Федеральные законы, Наградные приказы, Положение и протоколы, Правила соревнований, Секритариат, E-PSS, Прочее" key="description"/>

  </Head>
  <Heading text="Документы" />
  <DocsBlockIndex />
  </>
)

export default Documents