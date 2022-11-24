import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>11-14 мая 2021 - Всероссийские соревнования Кубок Дальнего Востока, г. Владивосток</title>
   </Head>
    <Heading text="11-14 мая 2021 - Всероссийские соревнования Кубок Дальнего Востока, г. Владивосток" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2021/05/11-14/01.jpg' objectFit='cover' layout='fill' alt='11-14 мая 2021 - Всероссийские соревнования Кубок Дальнего Востока, г. Владивосток'/>
    </div>

    <p>С 11 по 14 мая в г. Владивосток проходили Всероссийские Соревнования «Кубок Дальнего Востока». Соревнования собрали более 300 лучших спортсменов, которые представляли команды Дальневосточного Федерального округа и другие субъекты РФ.</p>
    <h3>Результаты выступления</h3>

<p>Пхумсэ</p>
<p>Хван Александра - 2 место, индивидуальные выступления 12-14 лет</p>
<p>Хван Александра - 3 место, синхронно-командные выступления 12-14 лет</p>
<p>Федусенко Андрей - 1 место, индивидуальные выступления 41-50 лет</p>
<p>Федусенко Андрей - 3 место, двойки смешанные 31 и старше</p>

<p>Керуги</p>
<p>Ким Екатерина - 1 место, юниорки до 52 кг</p>
<p>Джафарова Илаха - 1 место, юниорки 59 кг</p>
<p>Сенчило Дмитрий - 1 место, юноши св. 65 кг</p>
<p>Федусенко Георгий - 3 место, юниоры до 55 кг</p>
 
  

  

  </>
)

export default News1