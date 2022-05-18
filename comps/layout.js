import NavBar from "./navBar"
import Footer from "./footer"
import styles from "../styles/Team.module.css"

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