import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"



const Taekwondo = () => (
  <>
  <Head>
    <title>Всемирная штаб-квартира тхэквондо - Куккивон</title>
  </Head>
  <Heading text="Всемирная штаб-квартира тхэквондо - Куккивон" />

  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/01/01.jpg' objectFit='cover' layout='fill' alt='Всемирная штаб-квартира тхэквондо - Куккивон'/>
    </div>

  <p>Куккивон (국기원; 國技院), также известный как Всемирная штаб-квартира тхэквондо и Всемирная академия тхэквондо, это организация, занимающаяся развитием тхэквондо. Куккивон напрямую подчиняется правительству Ю. Кореи.</p>
  <h4>История</h4>
  <p>Возведение здания Куккивон было начато 19 ноября 1971 года, и завершено 30 ноября 1972 года. Главное здание вмещает до 3000 зрителей. Крыша выполнена в традиционном корейском стиле.</p>
  <p>В мая 1973 года при поддержке Корейской Ассоциации тхэквондо был проведен первый чемпионат мира, который собрал около 200 участников со всего мира. В сентябре 1974 года на базе Куккивон была создана демонстрационная команда. Первым президентом Куккивон стал Un Yong Kim. В настоящий период Куккивоном управляет Won Sik Kang.</p>
  <h4>Роль</h4>
  <p>Куккивон – это центр подготовки инструкторов, дом всемирной академии тхэквондо. Куккивон выдает официальные сертификаты инструктора и сертификаты обладателя дана и пхума (до 15 лет).</p>
  <p>Согласно правилам Всемирной федерации тхэквондо, все участники турниров, санкционированных Всемирной федерацией тхэквондо должны быть обладателями черного пояса (пхум или дан), подтвержденного Куккивоном. Куккивон издал правила, регулирующие процедуру получения дана/пхума – аттестацию на черный пояс.</p>

  </>
)

export default Taekwondo