import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BenefitsSection from '../../components/benefitsSection/BenefitsSection'
import CourseHeroSection from '../../components/courseherosection/courseherosection'
import DescriptionSection from '../../components/descriptionsection/DescriptionSection'
import Footer from '../../components/footer/Footer'
import { getCourse } from '../../utils/httpclient'



const Course = () => {
  const {id}=useParams();
  const [course, setCourse] = useState(null);
  const getCourseById=async (id)=>{
    const response= await getCourse(id);
   setCourse(response.result)
  }
useEffect(() => {
  getCourseById(id);
}, []);

  return (
    <Container  maxWidth="xxl">
   {course? <div>
 <CourseHeroSection course={course}/>
  <DescriptionSection course={course}/>
  <BenefitsSection/>
     <Footer/>  
   </div>:<div>loading</div>}
</Container>
  )
}

export default Course