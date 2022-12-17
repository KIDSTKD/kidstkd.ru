import Head from 'next/head'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'
import News22 from '../../../components/03-news/data/2022';


let Event = News22.find(item => item.id == 10);
let EventTitle = `${Event.date} - ${Event.title}, ${Event.place}`
let EventURL = `https://kidstkd.ru${Event.link}`
let EventImg = `https://kidstkd.ru${Event.path}`


const News1 = () => (
  <>
   <Head>
    <title>{EventTitle}</title>
    <meta property="og:url" content={EventURL}  key="url" />
    <meta property="og:title" content={EventTitle}  key="title" />
    <meta property="og:type" content="article"  key="type" />
    <meta property="og:description" content={Event.p}  key="description"/>
    <meta property="og:image" content={EventImg}  key="image" />
   </Head>
   <h1>{Event.date} - {Event.title}, {Event.place}</h1>
    <div className={styles.news_logo}>
        <Image src={Event.path} objectFit='cover' layout='fill' alt={Event.title}/>
    </div>
    <p></p>

  </>
)

export default News1

