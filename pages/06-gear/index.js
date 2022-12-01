import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../components/Heading'
import Equip from '../../public/img/06/01.png'

const Gear = () => (
  <>
  <Head>
    <title>KIDSTKD - Экипировка</title>
  </Head>
  <Heading text="Экипировка" />
  <div className='image'>
    <Image src={Equip} alt='Экипировка' objectFit='contain' layout='fill'/>
  </div>

  </>
)

export default Gear