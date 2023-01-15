import Head from 'next/head'
import Heading from '../../components/Heading'

import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../components/03-news/NewsBlock.module.css'


const News = ({posts}) => {

  return  <>
  
  <Head>
    <title>KIDSTKD - Новости 2023</title>
   </Head>
    <Heading text="Новости 2023" />

    <div>
      {posts.map(a => {
          const {slug, frontmatter} = a
          const {title, date, place, bannerImage, description} = frontmatter
          return <article key={title}>
              
              <Link href={`/posts/news/${slug}`}>
                  <div className={styles.news}>
                  <div className={styles.news_img}><Image className='img' src={bannerImage} alt={title} fill='true' /></div>
                  <div className={styles.news_header}>{date} - {title} ({place})</div>
                  <p className={styles.news_p}>{description}</p>
                  </div>
              </Link>
              
          </article>
      })}
    </div></>
    }

export default News;

export async function getStaticProps(){
  const files = fs.readdirSync('posts/news');
  const filesRev = files.reverse();
  const filesFiltred = filesRev.filter(date => date.includes(2023))
  const posts = filesFiltred.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/news/${fileName}`, 'utf-8');
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