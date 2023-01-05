import Head from 'next/head'

import fs from 'fs';
import matter from 'gray-matter';

import Heading from '../components/Heading'
import Slider from '../components/mainpage_slider/Mainpage_slider'
import NewsBlock from '../components/03-news/newsIndex'
import Link from 'next/link'

import Image from 'next/image';
import styles from '../components/05-taekwondo/articles/ArticlesBlock.module.css'




const Home = ({posts}) => (
  <>
  <Head>
    <title>KIDSTKD - Тхэквондо в Уссурийске</title>
    <meta name="yandex-verification" content="30c6b2884dbb10d8" />
  </Head>
  <Heading text="Приходи на тхэквондо!" />
    <p>Мы приглашаем детей от 4 лет на занятия олимпийским видом спорта. Занятия проходят в мини-группах детей одного возраста, что обеспечивает положительный результат занятий. Занятия охватывают все аспекты тхэквондо, и включают в себя базовую подготовку, обучение ударной технике, обучение техническому комплексу пхумсэ.</p>
    <h4>Для занятий Вашему ребенку понадобиться:</h4>
    <ul>
      <li>справка от врача о том, что по состоянию здоровья ребенок может заниматься в секции спортивных единоборств, в данном случае - тхэквондо;</li>
      <li>анкета занимающегося в спортивной секции тхэквондо, которую можно <Link href='/02-docs/other' className='link'>скачать</Link> и заполнить самостоятельно;</li>
      <li>копии свидетельства о рождении и полиса ОМС (обязательного медицинского страхования);</li>
      <li>страховой полис от несчастных случаев (с минимальной страховой суммой 10,000 рублей).</li>
    </ul>
    <Link href='/08-athlets' className='link_h4'><h4>Лучшие спортсмены</h4></Link>
  <Slider />
  <p>Мы находимся по адресу ул. Ленина 41 (фитнес-клуб «Taekwondo-Land»). Занятия проводят тренеры-инструкторы федерации: Салатский Станислав Вадимович (Мастер Спорта РФ, 2ой дан), Ким Виктория Алексеевна (Мастер Спорта РФ, 4ый дан). Дополнительную информацию можно уточнить по телефону - <Link className='link' href="tel:+79644432986">+7(964)443 29 86</Link>.</p>
    <Link href='/05-taekwondo' className='link_h4'><h4>Что такое тхэквондо?</h4></Link>

    <p>Тхэквондо – традиционное корейское единоборство, один из популярнейших видов спорта, в котором основой является не физическое превосходство, а техника. Также тхэквондо позволяет гармонично развивать как физические, так и духовные качества. Сегодня тхэквондо международный вид спорта, включенный в программу летних Олимпийских игр.</p>
    <p>Федерация тхэквондо Уссурийского городского округа занимается развитием Олимпийского вида спорта - тхэквондо на территории г. Уссурийска и других территорий округа. Помимо тренировочного процесса наша организация занимается проведением турниров и чемпионатов различного уровня, мы регулярно проводим семинары для тренеров, спортсменов и судей. Также спортсмены нашей федерации принимают участие и занимают призовые места на различных международных и Всероссийских соревнованиях.</p>
    <Link href='/03-news' className='link_h4'><h4>Новости</h4></Link>
  <NewsBlock />
    <Link href='/05-taekwondo/blog' className='link_h4'><h4>Публикации</h4></Link>


    <div className={styles.all}>
        {posts.map(post => {
            const {slug, frontmatter} = post
            const {title, bannerImage, description} = frontmatter

            return <article key={title}>
                
                <Link href={`/posts/${slug}`}>
                    <div className={styles.articles2}>
                    <div className={styles.articles_img2}><Image className={styles.blog_image} src={bannerImage} fill='true' /></div>
                    <h2 className={styles.articles_header2}>{title}</h2>
                    <p className={styles.articles_p2}>{description}</p>
                    </div>
                </Link>
                
            </article>
        })}
    </div>
    
  </>
)

export default Home



export async function getStaticProps(){
  const files = fs.readdirSync('posts');
  const filesRev = files.reverse();
  const files9 = filesRev.slice(-0,6)
  const posts = files9.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
  });

  return {
      props: {
        posts,
      },
  };
}