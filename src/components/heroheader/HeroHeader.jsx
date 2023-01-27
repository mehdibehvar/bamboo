import Navbar from "../navbar/Navbar"
import { HeroDescription, HeroTitle, HeroViewCourses } from "./HeroDetails"
import "./HeroHeader.scss"
import SearchBox from "./SearchBox"

const HeroHeader = () => {
  return (
       <section className='hero_section'>
            <div className="blur_rectangle"></div>
            <Navbar/>
            <HeroTitle/>
            <HeroDescription/>
            <HeroViewCourses/>
            <SearchBox/>
        </section>
  )
}

export default HeroHeader