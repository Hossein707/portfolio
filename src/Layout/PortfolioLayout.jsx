
import { Outlet } from 'react-router'
import SocialmediaNav from '../Component/SocialmediaNav'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Copyright from '../Component/Copyright'

const PortfolioLayout = () => {
    return (
        <>
            <SocialmediaNav />
            <Navbar />

            <Outlet></Outlet>

            <Footer />
            <Copyright />
        </>
    )
}

export default PortfolioLayout