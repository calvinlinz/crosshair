import NavBar from "./navBar"
import Footer from "./footer"

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