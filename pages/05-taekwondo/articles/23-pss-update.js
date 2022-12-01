import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"
import Link from 'next/link'

const Taekwondo = () => (
  <>
  <Head>
    <title>Обновление PSS (DAEDO, KPNP)</title>
  </Head>
  <Heading text="Обновление PSS (DAEDO, KPNP)" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/23/01.png' objectFit='cover' layout='fill' alt='Обновление PSS (DAEDO, KPNP)'/>
    </div>
 <p>Вслед за изменениями правил, производители аккредитованных систем электронного судейства обновили программное обеспечение. </p>
 <p>Daedo GEN1 – версия 3.2.4 от 17 ноября 2022 (полная поддержка) - <Link className='link' href='/02-docs/05'>скачать</Link></p>
 <p>Daedo GEN2 – версия 3.2.2 от 03 июня2022 (частичное обновление) – <Link className='link' href='/02-docs/05'>скачать</Link></p>
 <p>KPNP – версия 2.0.14 от 10 ноября 2022 (полная поддержка) - <Link className='link' href='/02-docs/05'>скачать</Link></p>
  </>
)

export default Taekwondo