import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import styles from '../../components/05-taekwondo/articles/ArticlesBlock.module.css'
import Heading from '../../components/Heading';

    const Blog = ({posts}) => {
    return <>
    <Head>
    <title>Публикации</title>
   </Head>
    <Heading text="Публикации" />
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
}
export default Blog;

export async function getStaticProps(){
    const files = fs.readdirSync('posts/blog');
    const filesRev = files.reverse();
    const posts = filesRev.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/blog/${fileName}`, 'utf-8');
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