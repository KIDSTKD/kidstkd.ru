import Head from 'next/head'

import styles from "../08-athlets/Athlets.module.css"

import Heading from '../../components/Heading'

import KhvanA from "../../components/mainpage_slider/athlets/khvanA";
import FedusenkoA from "../../components/mainpage_slider/athlets/fedusenkoA";
import SenchiloD from "../../components/mainpage_slider/athlets/senchilod";
import KimE from "../../components/mainpage_slider/athlets/kime";
import JafarovaI from "../../components/mainpage_slider/athlets/jafarovai"
import ShapovalovM from "../../components/mainpage_slider/athlets/shapovalovM"
import SimontovskayaV from "../../components/mainpage_slider/athlets/simontovskayaV";
import UkhabotinI from "../../components/mainpage_slider/athlets/ukhabotinI";


const Contacts = () => (
  <>
  <Head>
    <title>KIDSTKD - Лучшие спортсмены</title>
  </Head>
  <Heading text="Лучшие спортсмены" />


  <div className={styles.athlets}><KimE />
      <JafarovaI />
      <KhvanA />
      <FedusenkoA />
      <ShapovalovM />
      <SenchiloD />
      <SimontovskayaV />
      <UkhabotinI />
      </div>

  </>
)

export default Contacts