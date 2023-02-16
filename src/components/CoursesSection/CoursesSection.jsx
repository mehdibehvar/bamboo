import { NavLink } from "react-router-dom"
import "./courseSection.scss"

const CoursesSection = ({courses}) => {
  const Csharp=courses.filter(item=>item.title==="دوره سی شارپ")[0];
  const java=courses.filter(item=>item.title==="دوره جاوا")[0];
  const bootstrap=courses.filter(item=>item.title==="دوره بوت استرپ")[0];
  const javascript=courses.filter(item=>item.title=== "دوره جاوااسکریپت")[0];
  return (
    <>
 {courses?   <section className='courses_section'>
        <div className="right">
          <div className="green_frame"> 
          <div className="js_frame">
            <div className="logo"></div>
            <div className="title">
            <NavLink to={`course/${javascript?._id}`} className="nav_links">
            <span>دوره جاوا اسکریپت</span>
            </NavLink>
             
            </div>
          </div>
          <div className="c_frame">
          <div className="logo"></div>
            <div className="title">
            <NavLink to={`course/${Csharp?._id}`} className="nav_links">
           <span>دوره سی شارپ</span>
            </NavLink>
            </div>
          </div>
          <div className="java_frame">
          <div className="logo"></div>
            <div className="title">
            <NavLink to={`course/${java?._id}`} className="nav_links">
              <span>دوره جاوا</span>
            </NavLink>
            </div>
          </div>
          <div className="bootstrap_frame">
          <div className="logo"></div>
            <div className="title">
            <NavLink to={`course/${bootstrap?._id}`} className="nav_links">
              <span>دوره بوت استرپ</span>
            </NavLink>
            </div>
          </div>
          </div>
        </div>
        <article className='left'>
        <div className='frame'>
            </div>
               <div>
               <h4 className="title">دوره های آموزشی</h4>
                <p className="text">
                دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین اساتید ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی ، اقتصاد ... فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
                </p>
               </div>
<div className="button_wrapper">
<div className="see_courses">
<NavLink to="/courses" className="nav_links">
  <span>مشاهده دورهها</span>
</NavLink>
  </div>

  </div>     
        </article>
        </section>:<div>loading</div>}
    </>
  )
}

export default CoursesSection