import Footer from "../footer/Footer"
import HeroHeader from "../heroheader/HeroHeader"

const Layout = ({children}) => {
  return (
    <div>
      <HeroHeader/>
      <main>{children}</main>
      <Footer/>  
    </div>
  )
}

export default Layout