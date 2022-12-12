import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import LeftSide from "./leftside/LeftSide";
import RightSide from "./rightside/RightSide";
import Footer from "./footer/Footer";
import MobileFooter from "./mobilefooter/MobileFooter"



import styles from "../layout/Layout.module.css"

const Layout = ({ children }) => (
     <>
       <div className={styles.wrapper}>

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