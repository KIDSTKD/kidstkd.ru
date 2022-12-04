import Head from 'next/head'

import Heading from '../../components/Heading'
import ContactBlock from '../../components/07-contacts/contactBlock'

const Contacts = () => (
  <>
  <Head>
    <title>KIDSTKD - Контакты</title>
  </Head>
  <Heading text="Контакты" />

  <ContactBlock />
  </>
)

export default Contacts