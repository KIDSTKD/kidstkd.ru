import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Олимпийские Игры Токио-2020</title>
  </Head>
  <Heading text="Олимпийские Игры Токио-2020" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/21/01.jpg' objectFit='cover' layout='fill' alt='Олимпийские Игры Токио-2020'/>
    </div>
    <p>Уважаемые посетители сайта, данный раздел находится в разработке, в самое ближайшее время мы наполним его информацией. Приносим свои извинения, всю интересующую вас информацию вы можете получить по телефону <a href="tel:+79644432986">+7(964)443 29 86</a></p>  </>
)

export default Taekwondo