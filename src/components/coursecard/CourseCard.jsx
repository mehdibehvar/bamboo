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
  return (
    <div className='course_card'>
        <CardLogo url="http://res.cloudinary.com/df9w7u89a/image/upload/v1676538533/lquvwb83skt98w1fdshl.png"/>
        <div className='details'>
            <h6>{course.title} </h6>
            <div className='teacher'>
                <span>مدرس:</span>
                <span>{course.teacher.fullName}</span>
            </div>
            <div className='capacity'>
                <div>
                    <span>ظرفیت:</span>
                    <span>{course.capacity} نفر</span>
                </div>
              
                <button onClick={handleOpen}>جزییات</button>
              <CourseModal course={course} open={open} handleClose={handleClose}/>
            </div>
            <div className='border_bottom'></div>
        </div>
        <div className='price'>
            <span>{course.cost} تومان</span>
        </div>
    </div>
  )
}

export default CourseCard;
