import Head from 'next/head'
import Image from "next/legacy/image";
import Link from 'next/link';
import styles from '../../../components/03-news/NewsBlock.module.css'
import News22 from '../../../components/03-news/data/2022';


const Images = [
  { id: "01", src: "/img/03/2022/10/28/01.jpg", alt: "Кубок Приморского края 2022",},
  { id: "02", src: "/img/03/2022/10/28/02.jpg", alt: "Кубок Приморского края 2022",},
  { id: "03", src: "/img/03/2022/10/28/03.jpg", alt: "Кубок Приморского края 2022",},
  { id: "04", src: "/img/03/2022/10/28/04.jpg", alt: "Кубок Приморского края 2022",},
  { id: "05", src: "/img/03/2022/10/28/05.jpg", alt: "Кубок Приморского края 2022",},
  { id: "06", src: "/img/03/2022/10/28/06.jpg", alt: "Кубок Приморского края 2022",},
  { id: "07", src: "/img/03/2022/10/28/07.jpg", alt: "Кубок Приморского края 2022",},
  { id: "08", src: "/img/03/2022/10/28/08.jpg", alt: "Кубок Приморского края 2022",},
  { id: "09", src: "/img/03/2022/10/28/09.jpg", alt: "Кубок Приморского края 2022",},
  { id: "10", src: "/img/03/2022/10/28/10.jpg", alt: "Кубок Приморского края 2022",},
  { id: "11", src: "/img/03/2022/10/28/11.jpg", alt: "Кубок Приморского края 2022",},
  { id: "12", src: "/img/03/2022/10/28/12.jpg", alt: "Кубок Приморского края 2022",},
  { id: "13", src: "/img/03/2022/10/28/13.jpg", alt: "Кубок Приморского края 2022",},
  { id: "14", src: "/img/03/2022/10/28/14.jpg", alt: "Кубок Приморского края 2022",},
  { id: "15", src: "/img/03/2022/10/28/15.jpg", alt: "Кубок Приморского края 2022",},
  { id: "16", src: "/img/03/2022/10/28/16.jpg", alt: "Кубок Приморского края 2022",},
  { id: "17", src: "/img/03/2022/10/28/17.jpg", alt: "Кубок Приморского края 2022",},
  { id: "18", src: "/img/03/2022/10/28/18.jpg", alt: "Кубок Приморского края 2022",},
  { id: "19", src: "/img/03/2022/10/28/19.jpg", alt: "Кубок Приморского края 2022",},
  { id: "20", src: "/img/03/2022/10/28/20.jpg", alt: "Кубок Приморского края 2022",},
  { id: "21", src: "/img/03/2022/10/28/21.jpg", alt: "Кубок Приморского края 2022",},
  { id: "22", src: "/img/03/2022/10/28/22.jpg", alt: "Кубок Приморского края 2022",},
  { id: "23", src: "/img/03/2022/10/28/23.jpg", alt: "Кубок Приморского края 2022",},
  { id: "24", src: "/img/03/2022/10/28/24.jpg", alt: "Кубок Приморского края 2022",},
  { id: "25", src: "/img/03/2022/10/28/25.jpg", alt: "Кубок Приморского края 2022",},
  { id: "26", src: "/img/03/2022/10/28/26.jpg", alt: "Кубок Приморского края 2022",},
  { id: "27", src: "/img/03/2022/10/28/27.jpg", alt: "Кубок Приморского края 2022",},
  { id: "28", src: "/img/03/2022/10/28/28.jpg", alt: "Кубок Приморского края 2022",},
  { id: "29", src: "/img/03/2022/10/28/29.jpg", alt: "Кубок Приморского края 2022",},
  { id: "30", src: "/img/03/2022/10/28/30.jpg", alt: "Кубок Приморского края 2022",},
  { id: "31", src: "/img/03/2022/10/28/31.jpg", alt: "Кубок Приморского края 2022",},
  { id: "32", src: "/img/03/2022/10/28/32.jpg", alt: "Кубок Приморского края 2022",},
  { id: "33", src: "/img/03/2022/10/28/33.jpg", alt: "Кубок Приморского края 2022",},
  { id: "34", src: "/img/03/2022/10/28/34.jpg", alt: "Кубок Приморского края 2022",},
  { id: "35", src: "/img/03/2022/10/28/35.jpg", alt: "Кубок Приморского края 2022",},
 

];

let Event = News22.find(item => item.id == 14);
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

    
    <p>Во Владивостоке в пятницу, 28 октября, прошёл Кубок Приморского края по тхэквондо. В спорткомплексе «Олимпиец» определили сильнейших спортсменов в различных весовых категориях в трёх возрастных группах. Кубок Приморского края прошёл в двух дисциплинах: пхумсэ и керуги. Поединки проходили на четырёх площадках.</p>
    <h3>Результаты соревнований:</h3>
    <p>Хван Александра - 3 место - технический комплекс Пхумсэ, индивидуальные выступления</p>
    <p>Симонтовская Виктория - 1 место - поединки, девушки до 33 кг.</p>
    <p>Ухаботин Иван - 2 место - юноши, до 41 кг.</p>
    <p>Бурцев Кирилл - 3 место - юноши, до 49 кг.</p>
    <p>Сенчило Дмитрий - 2 место - юниоры, до 78 кг.</p>

 

    {Images.map(({id, src, alt}) => (
            
      <Link key={id} href={src}> 
        <div className={styles.image_gallary}>
          <Image src={src} objectFit='cover' layout='fill' alt={alt}/>
        </div>
      </Link>

      ))}



  

  

  </>
)

export default News1