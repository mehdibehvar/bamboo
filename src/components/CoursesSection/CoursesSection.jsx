import "./courseSection.scss"

const CoursesSection = () => {
  return (
    <section className='courses_section'>
        <div className="right">
 
          <div className="green_frame"> 
          <div className="js_frame">
            <div className="logo"></div>
            <div className="title">
              <span>دوره جاوا اسکریپت</span>
            </div>
          </div>
          <div className="c_frame">
          <div className="logo"></div>
            <div className="title">
              <span>دوره سی شارپ</span>
            </div>
          </div>
          <div className="java_frame">
          <div className="logo"></div>
            <div className="title">
              <span>دوره جاوا</span>
            </div>
          </div>
          <div className="bootstrap_frame">
          <div className="logo"></div>
            <div className="title">
              <span>دوره بوت استرپ</span>
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
<div className="see_courses"><span>مشاهده دورهها</span></div>

  </div>     
        </article>
        </section>
  )
}

export default CoursesSection