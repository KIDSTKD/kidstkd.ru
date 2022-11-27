import Link from "next/link";
import Image from "next/image";

import styles from "../mainpage_slider/Mainpage_slider.module.css"

import KhvanA from "./athlets/khvanA";
import FedusenkoA from "./athlets/fedusenkoA";
import SenchiloD from "./athlets/senchilod";
import KimE from "./athlets/kime";
import JafarovaI from "./athlets/jafarovai"
import ShapovalovM from "./athlets/shapovalovM"
import SimontovskayaV from "./athlets/simontovskayaV";
import UkhabotinI from "./athlets/ukhabotinI";



const Slider = () => (
    <>

        <div className={styles.main_slider}>
            
        <KhvanA />
        <FedusenkoA />
        <SenchiloD />
        <KimE />
        <JafarovaI />
        <ShapovalovM />
        <SimontovskayaV />
        <UkhabotinI />
  



       


		</div>


    </>



);

export default Slider