import Link from "next/link"
import Image from "next/image"
import styles from '../components/05-taekwondo/articles/ArticlesBlock.module.css'


const Test = () => {
    return <>
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
</div></>
}

export default Test;

