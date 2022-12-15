import Head from 'next/head'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'
import News22 from '../../../components/03-news/data/2022';


let Event = News22.find(item => item.id == 16);
let EventTitle = `${Event.date} - ${Event.title}, ${Event.place}`
let EventURL = `https://kidstkd.ru${Event.link}`
let EventImg = `https://kidstkd.ru${Event.path}`


const News1 = () => (
  <>
   <Head>
    <title>{EventTitle}</title>
    <meta property="og:url" content={EventURL} />
    <meta property="og:title" content={EventTitle} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={Event.p} />
    <meta property="og:image" content={EventImg} />
    
   </Head>
   <h1>{Event.date} - {Event.title}, {Event.place}</h1>
    <div className={styles.news_logo}>
        <Image src={Event.path} objectFit='cover' layout='fill' alt={Event.title}/>
    </div>

    <p>С 9 по 12 декабря во Владивостоке в спорткомплексе «Олимпиец» прошли Всероссийские соревнование &#34;Кубок Приморья&#34;. В соревнованиях приняли участие более 400 участников с Сахалинской, Иркутской областей, Камчатского, Хабаровского и Приморского краёв. Спортсмены боролись за медали в 2 дисциплинах: технический комплекс пхумсэ и кёруги. Соревнования проходили на 4 площадках в течении двух дней.</p> 
    <h4>Результаты выступлений:</h4>
    <p>Хван Александра – 🥉 (юноши и девушки, двойки смешанные)</p> 
    <p>Хван Александра – 🥇 (девушки, cинхронно-командные выступления)</p> 
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