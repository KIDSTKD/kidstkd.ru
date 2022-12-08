import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Жесты рефери</title>
  </Head>
  <Heading text="Жесты рефери" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/20/01.tiff' objectFit='cover' layout='fill' alt='Жесты рефери'/>
    </div>
    <p>Уважаемые посетители сайта, данный раздел находится в разработке, в самое ближайшее время мы наполним его информацией. Приносим свои извинения, всю интересующую вас информацию вы можете получить по телефону <a href="tel:+79644432986">+7(964)443 29 86</a></p>  </>
)

export default Taekwondo