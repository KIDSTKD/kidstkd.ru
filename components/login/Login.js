import Link from 'next/link'
import styles from '../login/Login.module.css'

const Login = () => (
  <>
    <div className={styles.login}>
      <p>Имя пользователя</p>
      <input type="text" />
      <p>Пароль</p>
      <input type="password" />
      <Link href="/login">
        <button className={styles.login_btn}>Войти</button>
      </Link>
    </div>

  </>
)

export default Login