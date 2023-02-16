import React from 'react'
import Navbar from '../navbar/Navbar'
import "./coursesheader.scss"
import  SearchBoX  from "../heroheader/SearchBox";
const CoursesHeader = () => {
  return (
    <section className='courses_section'>
        <Navbar/>
        <SearchBoX/>
        <div className="blur_rectangle"></div>
    </section>
    
  )
}

export default CoursesHeader