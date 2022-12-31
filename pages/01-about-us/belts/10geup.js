import Head from 'next/head'
import Link from 'next/link'
import styles from "../../../components/01-about-us/belttest/BeltTest.module.css"
import Image from 'next/legacy/image'
import Heading from '../../../components/Heading'

import Belst from '../../../public/img/01/belttest/10.png'

const About = () => (
  <>
  <Head>
    <title>KIDSTKD - Аттестация на 10 Гып</title>
  </Head>
  <Heading text="Аттестация на 10 Гып" />
  <div className='article_img'>
        <Image src={Belst} className="img" fill='true' alt='Аттестация на 10 Гып'/>
  </div>

    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
   
  </>
)

export default About