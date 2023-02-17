import { Container } from '@mui/material'
import React from 'react'
import CoursesHeader from '../components/coursesheader/CoursesHeader'
import PaginationSection from '../components/paginationSection/PaginationSection'
import Footer from "../components/footer/Footer"
const Courses = () => {
  return (
    <Container maxWidth="xxl" sx={{backgroundColor:"#E9E9E9"}}>
     <section>
      <CoursesHeader/>
      <main>
    <PaginationSection/>
      </main>
      <Footer/>
     </section>
    </Container>
  )
}

export default Courses