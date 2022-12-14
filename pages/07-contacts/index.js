import Head from 'next/head'

import Heading from '../../components/Heading'
import ContactBlockLenina41 from '../../components/07-contacts/contactBlockLenana41'
import ContactBlockDS246 from '../../components/07-contacts/contactBlockDS246'
import ContactBlockMikhailovka from '../../components/07-contacts/contactBlockMikhailovka'
import ContactBlockMikhaylovkaDS from '../../components/07-contacts/contactBlockMikhaylovkaDS'



const Contacts = () => (
  <>
  <Head>
    <title>KIDSTKD - Контакты</title>
  </Head>
  <Heading text="Контакты" />

  <ContactBlockLenina41 />
  <ContactBlockDS246 />
  <ContactBlockMikhailovka />
  <ContactBlockMikhaylovkaDS />

  </>
)

export default Contacts