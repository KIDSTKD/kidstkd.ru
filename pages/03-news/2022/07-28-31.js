import Head from 'next/head'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'
import News22 from '../../../components/03-news/data/2022';



// const Event2 = News22.filter(function (e) {
//   return e.id === '10';
// });
// console.log(Event2)

const Event = 

  { 
    id: 10, 
    path: '/img/03/2022/07/28-31/01.jpg', 
    date: '28-31 июля',
    place: 'г. Владивосток',
    title: 'Международные спортивные игры Дети Азии', 
    p: 'Уважаемые посетители сайта, данный раздел находится в разработке, в самое ближайшее время мы наполним его информацией. Приносим свои извинения, всю интересующую вас информацию вы можете получить по телефону +7(964)443 29 86', 
    link: '/03-news/2022/07-28-31'
}

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
    <p></p>
    <p>{EventTitle}</p>
  </>
)

export default News1

