import NavBar from "./navBar"
import Footer from "./footer"
import styles from "../styles/Home.module.css"

const Layout = ({children}) =>{
    return (
        <div className = "content">
                <NavBar/>
                    {children}
                <Footer/>
        </div>
     );
}

export default Layout;