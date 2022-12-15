import Head from 'next/head'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'
import News22 from '../../../components/03-news/data/2022';


let Event = News22.find(item => item.id == 13);
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

    <p>23 октября в г. Хабаровск прошел турнир «Золотая осень». В соревнованиях приняли участие около 200 участников с Хабаровского и Приморского краёв. Результаты выступления наших спортсменов:</p>
    <li>Хван Александра – 1 место (пхумсэ, индивидуальные выступления)</li>
    <li>Шаповалов Марк – 3 место (пхумсэ, индивидуальные выступления)</li>
    <li>Ухаботин Иван – 1 место (юноши, до 41 кг)</li>
    <li>Бурцев Кирилл – 2 место (юноши, до 49 кг)</li>
    <li>Шаповалов Марк – 2 место (юниоры, до 55 кг)</li>
  

  

  </>
)

export default News1