import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar/>
            <Outlet/>
            <Footer />
        </div>
    )
}

export default Layout