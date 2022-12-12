import Head from 'next/head'
import Heading from '../../components/Heading'
import { useRouter } from 'next/router'

import Month from '../../components/04-calendar/month'
import styles from '../../components/04-calendar/Month.module.css'

import {jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec} from "../../components/04-calendar/data/2022"


const Calendar = () => (

  <>
  <Head>
    <title>KIDSTKD - Календарь 2022</title>
  </Head>
  <Heading text="Календарь - 2022" />

  <Month text="Январь" />
  <div>
    {jan.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
        <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Февраль" />
  <div>
    {feb.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Март" />
  <div>
    {mar.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Апрель" />
  <div>
    {apr.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Май" />
  <div>
    {may.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Июнь" />
  <div>
    {jun.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Июль" />
  <div>
    {jul.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Август" />
  <div>
    {aug.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Сентябрь" />
  <div>
    {sep.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Октябрь" />
  <div>
    {oct.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Ноябрь" />
  <div>
    {nov.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  <Month text="Декабрь" />
  <div>
    {dec.map(({ id, date, title, etc }) => (
      <><div className={styles.event}>
      <p><strong>{date} </strong>{title}</p>
        <p className={styles.etc}>{etc}</p>
        </div></>
    ))}
  </div>

  </>
)

export default Calendar