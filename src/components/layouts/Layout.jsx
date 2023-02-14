import { Container } from "@mui/system"
import Footer from "../footer/Footer"
import HeroHeader from "../heroheader/HeroHeader"

const Layout = ({children}) => {
  return (
 <Container  maxWidth="xxl">
     <div>
      <HeroHeader/>
      <main>{children}</main>
      <Footer/>  
    </div>
 </Container>
  )
}

export default Layout