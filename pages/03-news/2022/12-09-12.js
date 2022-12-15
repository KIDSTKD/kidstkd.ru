import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>9-12 декабря 2022 - Всероссийские соревнования &#34;Кубок Приморья&#34;, г. Владивосток</title>
    <meta property="og:url" content="https://kidstkd.ru/03-news/2022/12-09-12" />
    <meta property="og:title" content="9-12 декабря 2022 - Всероссийские соревнования &#34;Кубок Приморья&#34;, г. Владивосток" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="С 9 по 12 декабря во Владивостоке в спорткомплексе «Олимпиец» прошли Всероссийские соревнование &#34;Кубок Приморья&#34;. В соревнованиях приняли участие более 400 участников с Сахалинской, Иркутской областей, Камчатского, Хабаровского и Приморского краёв. Спортсмены боролись за медали в 2 дисциплинах: технический комплекс пхумсэ и кёруги. Соревнования проходили на 4 площадках в течении двух дней." />
    <meta property="og:image" content="https://kidstkd.ru/_next/image?url=%2Fimg%2F03%2F2022%2F12%2F09-12%2F01.jpg&w=3840&q=75" />
    
   </Head>
    <Heading text="9-12 декабря 2022 - Всероссийские соревнования &#34;Кубок Приморья&#34;, г. Владивосток" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2022/12/09-12/01.jpg' objectFit='cover' layout='fill' alt='9-12 декабря 2022 - Всероссийские соревнования &#34;Кубок Приморья&#34;, г. Владивосток'/>
    </div>

    <p>С 9 по 12 декабря во Владивостоке в спорткомплексе «Олимпиец» прошли Всероссийские соревнование &#34;Кубок Приморья&#34;. В соревнованиях приняли участие более 400 участников с Сахалинской, Иркутской областей, Камчатского, Хабаровского и Приморского краёв. Спортсмены боролись за медали в 2 дисциплинах: технический комплекс пхумсэ и кёруги. Соревнования проходили на 4 площадках в течении двух дней.</p> 
    <h4>Результаты выступлений:</h4>
    <p>Хван Александра – 🥉 (юноши и девушки, двойки смешанные)</p> 
    <p>Хван Александра – 🥇 (девушки, индивидуальная программа)</p> 
    <p>Шаповалов Марк – 🥈 (юниоры, синхронно-командные выступления)</p> 
    <p>Хегай Максим – 🥈 (мальчики, до 26 кг)</p> 
    <p>Шульга Анна – 🥉 (девочки, до 36 кг)</p> 
    <p>Симонтовская Виктория – 🥉 (девушки, до 33 кг)</p> 
    <p>Ухаботин Иван – 🥉 (юноши, до 41 кг) </p> 
    <p>Бурцев Кирилл – 🥉 (юноши, до 49 кг) </p> 
    <p>Уваров Егор – 🥉 (юноши, до 49 кг)</p> 
    <p>Сенчило Дмитрий – 🥈 (юниоры, св. 78 кг)</p> 
    <p>По результатам соревнований Шаповалов Марк выполнил норматив I спортивного разряда.</p> 
  

  

  </>
)

export default News1