import Link from 'next/link'
import styles from '../search/Search.module.css'

const Search = () => (
  <>
    <div className={styles.search}>
      <input type="text" />
      <Link href="search">
        <div className={styles.search_icon}></div>
      </Link>
    </div>
  </>
)

export default Search