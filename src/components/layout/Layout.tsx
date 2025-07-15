import Navbar from '../navbar/Navbar.tsx'
import Menu from '../menu/Menu.tsx'
import Footer from '../footer/Footer.tsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
