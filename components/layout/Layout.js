import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import LeftSide from "./leftside/LeftSide";
import RightSide from "./rightside/RightSide";
import Footer from "./footer/Footer";
import MobileFooter from "./mobilefooter/MobileFooter"

// import Head from "next/head";

import styles from "../layout/Layout.module.css"

const Layout = ({ children }) => (
     <>
       <div className={styles.wrapper}>
         {/* <Head>
            <meta name="msapplication-TileColor" content="#255d98" />
            <meta name="theme-color" content="#255d98" /> 
         </Head> */}
         <Logo />
         <Navbar />
         <LeftSide />  
         <div className={styles.main}>      
            {children}
         </div>
         <RightSide />
         <Footer />
         <MobileFooter />
      </div>



     </>
);

export default Layout; 