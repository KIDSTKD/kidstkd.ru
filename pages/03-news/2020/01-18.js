import Head from 'next/head'
import Heading from '../../../components/Heading'
import Image from "next/legacy/image";
import styles from '../../../components/03-news/NewsBlock.module.css'


const News1 = () => (
  <>
   <Head>
    <title>18 января 2020 - Открытое Первенство Октябрьского муниципального района, с. Покровка</title>
   </Head>
    <Heading text="18 января 2020 - Открытое Первенство Октябрьского муниципального района, с. Покровка" />

    <div className={styles.news_logo}>
        <Image src='/img/03/2020/01/18/01.jpg' objectFit='cover' layout='fill' alt='18 января 2020 - Открытое Первенство Октябрьского муниципального района, с. Покровка'/>
    </div>

<p>18 января в стенах спортивного комплекса «Олимпиец» с. Покровка прошло открытое Первенство Октябрьского района по тхэквондо. Более 150 юных спортсменов с Уссурийского городского округа, Черниговского и Михайловского районов, г. Хабаровска сражались за медали на 2 площадках.</p> 
  

  

  </>
)

export default News1