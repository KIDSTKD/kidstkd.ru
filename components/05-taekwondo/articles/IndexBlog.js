import Image from 'next/image';

import styles from '../articles/ArticlesBlock.module.css'

import fs from 'fs';
import matter from 'gray-matter';

const IndexBlog = () => {
    return (
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
    );
}

export default IndexBlog;





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