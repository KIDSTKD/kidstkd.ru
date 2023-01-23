import Head from "next/head";
import Image from "next/image";
import Link from "next/link";



import styles from '../../../components/03-news/NewsBlock.module.css'

import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';




export default function News({frontmatter, content}) {




    const {title, date, place, description, bannerImage, gallary} = frontmatter

    const img_host = 'https://kidstkd.ru'
    const img_name = img_host + bannerImage

    return <>
       <Head>
    <title>{title}</title>
    <meta property="og:title" content={title}  key="title" />
    <meta property="og:type" content="news"  key="type" />
    <meta property="og:description" content={description}  key="description"/>
    <meta property="og:image" content={img_name}  key="image" />
   </Head>
      <h1>{date} - {title}, {place}</h1>
    <div className={styles.news_logo}>
        <Image className="img" src={bannerImage} fill={true} alt={title}/>
    </div>

        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />

        {gallary.map(({id, src, alt}) => (
            
            <Link key={id} href={src}> 
              <div className={styles.image_gallary}>
                <Image className="img" src={src} fill={true} alt={alt}/>
              </div>
            </Link>
            ))}

    </>
}


export async function getStaticPaths() {
  const files = fs.readdirSync("posts/news");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/news/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }