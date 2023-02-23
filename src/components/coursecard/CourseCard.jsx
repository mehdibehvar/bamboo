import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { useState } from 'react';
import CourseModal from '../modal/Modal';


import './coursecard.scss'
const CardLogo=styled(Box)(({theme})=>(props)=>(
    { 
        width:"100%",
        height:296,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
     backgroundImage:`url(${props.url})`,
      }
  ));

const CourseCard = ({course}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log();
  return (
    <div className='course_card'>
        <CardLogo url={`${course.lesson.image}`}/>
        <div className='details'>
            <h6>{course.title} </h6>
            <div className='teacher'>
                <span>مدرس:</span>
                <span>{course.teacher.fullName}</span>
            </div>
            <div className='capacity'>
                <div>
                    <span>ظرفیت:</span>
                    <span>{course.capacity.toLocaleString("fa-IR")} نفر</span>
                </div>
              
                <button onClick={handleOpen}>جزییات</button>
              <CourseModal course={course} open={open} handleClose={handleClose}/>
            </div>
            <div className='border_bottom'></div>
        </div>
        <div className='price'>
            <span>{course.cost.toLocaleString("fa-IR")} تومان</span>
        </div>
    </div>
  )
}

export default CourseCard;
