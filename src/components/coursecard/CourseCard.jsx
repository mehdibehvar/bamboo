import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom';
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
                <NavLink to={`/course/${course?._id}`}>
                <button>جزییات</button>
                </NavLink>
            </div>
            <div className='border_bottom'></div>
        </div>
        <div className='price'>
            <span>{course.cost} تومان</span>
        </div>
    </div>
  )
}

export default CourseCard