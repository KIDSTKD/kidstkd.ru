import Head from 'next/head'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'
import News22 from '../../../components/03-news/data/2022';


let Event = News22.find(item => item.id == 15);
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

    <p>12 Ноябре в г. Хабаровск прошел ежегодный Чемпионат и Первенство спортивного клуба Барсы. В соревнованиях приняли участие более 300 участников с Хабаровского, Камчатского, Приморского краёв, а также Сахалинской области. </p>
    <h3>Результаты соревнований:</h3>
    <p>Ухаботин Иван – 1 место (кадеты до 41 кг)</p>
    <p>Уваров Егор – 3 место (кадеты до 45 кг)</p>
    <p>Бурцев Кирилл – 1 место (кадеты до 49 кг)</p>
    <p>Кузьмин Арсений – 3 место (кадеты до 53 кг)</p>
    <p>Симонтовская Виктория – 1 место (девушки до 33 кг)</p>
    <p>Сенчило Дмитрий – 1 место (юниоры до 73 кг)</p>

    


  

  

  </>
)

export default News1