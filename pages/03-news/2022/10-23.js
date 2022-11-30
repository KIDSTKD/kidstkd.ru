import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>23 октября 2022 - Открытый турнир г. Хабаровска Золотая Осень, г. Хабаровск</title>
   </Head>
    <Heading text="23 октября 2022 - Открытый турнир г. Хабаровска Золотая Осень, г. Хабаровск" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2022/10/23/01.jpg' objectFit='cover' layout='fill' alt='23 октября 2022 - Открытый турнир г. Хабаровска Золотая Осень, г. Хабаровск'/>
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