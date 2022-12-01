import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Heading from '../../../components/Heading'
import styles from "../../../components/05-taekwondo/articles/ArticlesBlock.module.css"

const Taekwondo = () => (
  <>
  <Head>
    <title>Лицензирование</title>
  </Head>
  <Heading text="Лицензирование" />
  <div className={styles.articles_logo}>
        <Image src='/img/05/articles/13/01.png' objectFit='cover' layout='fill' alt='Лицензирование'/>
    </div>
    <p>Лицензирование повсеместно используется на рейтинговых турнирах по тхэквондо. Каждый спортсмен для регистрации на участие должен иметь лицензию ВТФ. В начале этого года, подобную систему ввели и для тренеров, сопровождающих спортсменов. Континентальные союзы провели обучение и лицензировали желающих.</p>
    <p>Однако с января 2017 года, все тренеры, желающие сопровождать своих спортсменов на рейтинговых турнирах (G-1, G-2 и т.п.) должны иметь лицензию ВТФ. Данное решение распространяется и на дисциплину пхумсэ, в которой также была введена <Link className='link' href='/05-taekwondo/articles/12-wt-rank-system'>рейтинговая система</Link>.</p>
    <p>Текущие лицензии будут действовать до окончания их срока. В то время как, новая лицензия должна заменить ранее выданные континентальными союзами лицензии до 31 декабря 2017 года.</p>
  </>
)

export default Taekwondo