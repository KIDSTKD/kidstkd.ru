import Head from 'next/head'
import Image from 'next/legacy/image'

import Heading from '../../components/Heading'
import Equip from '../../public/img/06/01.png'

const Gear = () => (
  <>
  <Head>
    <title>KIDSTKD - Экипировка</title>
  </Head>
  <Heading text="Экипировка" />
  <div className='image'>
    <Image src={Equip} alt='Экипировка'  className="img" fill='true'/>
  </div>

  </>
)

export default Gear