import "./courseHerosection.scss"
import Navbar from '../navbar/Navbar'
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { CalenderIcon, GoldStarIcon, GraduateIcon, LikeIcon, TeacherIcon, TeamWorkIcon } from "../common/button/icons";
import Loading from "../loading/Loading";
const LogoWrapper=styled(Box)(({theme})=>(props)=>(
  { 
      width:"223px",
      height:"246px",
      backgroundSize:"cover",
   backgroundImage:`url(${props.url})`,
    }
));
const SliderBar=styled(Box)(({theme})=>(props)=>(
  { 
      width:props.percent,
      height:"100%",
   backgroundColor:"#DBDBDB",
   opacity:"75%",
   position:"absolute",
   zIndex:6,
   top:0
   
    }
));
const BorderBottom=styled(Box)(({theme})=>(props)=>(
  { 
      width:"686px",
      height:"3px",
      backgroundColor:"#DBDBDB",
      opacity:"30%",
   
    }
));
const CourseHeroSection = ({course}) => {
const barPercent=(course?.students?.length/course.capacity)*100
   console.log(course.lesson.image);
  return (
    <section className='course_hero_section'>
    <Navbar/>
{course?<>
<section className="summary">
    <LogoWrapper url={`${course.lesson.image}`}/>
    <div className="title">{course.title} </div>
    <BorderBottom/>
    <div className="capacity_wrapper">
        <div className="capacity">
            <TeamWorkIcon/>
            <span>ظرفیت {course.capacity.toLocaleString("fa-IR")} نفر</span>
        </div>
        <div className="students">
        <GraduateIcon/>
            <span>دانشجو {course?.students?.length.toLocaleString("fa-IR")} نفر</span>
        </div>
    </div>
    <div className="capacity_bar">
     
     <div className="slot">
     </div>
        <SliderBar percent={`${barPercent}%`}>
     <span>{Math.ceil(barPercent)}%</span>

        </SliderBar>
    </div>
    </section>
    <section className="details">
     <div>
        <TeacherIcon/>
        <span>مدرس:</span>
        <span>{course?.teacher?.fullName}</span>
     </div>
     <div>
        <div className="border border_right"></div>
      <div className="date_wrapper">
      <CalenderIcon/>
        <span> تاریخ شروع : {(new Date(course.startDate).toLocaleDateString())}</span>
        <span> تاریخ پایان  : {new Date(course.endDate).toLocaleDateString()}</span>
      </div>
        <div className="border border_left"></div>
     </div>
     <div>
        <LikeIcon/>
        <span>رتبه:</span>
        <div className="stars_wrapper">
           { [1,2,3,4].map((item,index)=><GoldStarIcon key={index}/>)}
        </div>
     </div>
     <div className="blur_cover"></div>
    </section></>:<Loading/>}
   <div className="blur_rectangle"></div>
   </section>
  )
}

export default CourseHeroSection