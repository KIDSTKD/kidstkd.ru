import Head from 'next/head'

import Heading from '../../components/Heading'
import Login from '../../components/login/Login'

const Login01 = () => (
  <>
    <Head>
      <title>Личный кабинет</title>
    </Head>

    <Heading text="Личный кабинет" />


    <Login />


  </>
)

export default Login01