import Head from 'next/head'
import Image from "next/legacy/image";
import Link from 'next/link';
import styles from '../../../components/03-news/NewsBlock.module.css'
import News22 from '../../../components/03-news/data/2022';


let Event = News22.find(item => item.id == 17);
let EventTitle = `${Event.date} - ${Event.title}, ${Event.place}`
let EventURL = `https://kidstkd.ru${Event.link}`
let EventImg = `https://kidstkd.ru${Event.path}`

const Images = [
  { id: "01", src: "/img/03/2022/12/19/01.jpeg", alt: `${EventTitle}`,},
  { id: "02", src: "/img/03/2022/12/19/02.jpeg", alt: `${EventTitle}`,},
  { id: "03", src: "/img/03/2022/12/19/03.jpeg", alt: `${EventTitle}`,},
  { id: "04", src: "/img/03/2022/12/19/04.jpeg", alt: `${EventTitle}`,},
  { id: "05", src: "/img/03/2022/12/19/05.jpeg", alt: `${EventTitle}`,},
  { id: "06", src: "/img/03/2022/12/19/06.jpeg", alt: `${EventTitle}`,},
  { id: "07", src: "/img/03/2022/12/19/07.jpeg", alt: `${EventTitle}`,},
  { id: "08", src: "/img/03/2022/12/19/08.jpeg", alt: `${EventTitle}`,},
  { id: "09", src: "/img/03/2022/12/19/09.jpeg", alt: `${EventTitle}`,},
  { id: "10", src: "/img/03/2022/12/19/10.jpeg", alt: `${EventTitle}`,},
  { id: "11", src: "/img/03/2022/12/19/11.jpeg", alt: `${EventTitle}`,},
  { id: "12", src: "/img/03/2022/12/19/12.jpeg", alt: `${EventTitle}`,},
  { id: "13", src: "/img/03/2022/12/19/13.jpeg", alt: `${EventTitle}`,},
  { id: "14", src: "/img/03/2022/12/19/14.jpeg", alt: `${EventTitle}`,},
  { id: "15", src: "/img/03/2022/12/19/15.jpeg", alt: `${EventTitle}`,},
  { id: "16", src: "/img/03/2022/12/19/16.jpeg", alt: `${EventTitle}`,},
 

];

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

 <p>19 декабря завершилось итоговое мероприятие 2022 года – аттестация на цветные пояса. Аттестация – это важный этап подготовки юных спортсменов, которий позволяет оценить техническое мастерство и результат занятий. На этой аттестации все спортсмены успешно справились с заданиями аттестационной комиссии.</p>
 <p>Также в рамках аттестации были подведены итоги спортивного сезона 2022 года. Федерация отметила победителей и призеров Чемпионата и Первенства России – Хван Александру и Федусенко Андрея, призёра Международный Спортивных Игр «Дети Азии» - Сенчило Дмитрия. Также почетных грамот удостоились члены сборной команды Приморского края, участники Первенства России в г. Калининград: победитель Первенства ДФО и Приморского края – Симонтовская Виктория, и победитель Первенства Приморского края – Ухаботин Иван; серебряные призёры Чемпионата России по тхэквондо (ПОДА) – Сорокин Егор и Пенкина Лариса; призёры Всероссийских соревнований – Шаповалов Марк, Бурцев Кирилл, Уваров Егор, Хегай Максим, Шульга Анна. </p>

  
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