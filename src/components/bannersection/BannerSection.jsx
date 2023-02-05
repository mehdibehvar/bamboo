import "./bannersectionStyle.scss"

const BannerSection = () => {
  return (
  <section className='banner_section'>
   <section className='top'>
    <div className='right'>
     <div className="content">
     <h4>مشاوره آنلاین </h4>
        <p>مشاوران ما برای حل مشکلات شما آماده اند ... </p>
     </div>
    </div>
    <div className='left'>
        
    </div>
    <button className="consult">مشاوره</button>
   </section>
   <section className='middle'>
   <div className='right'>
        
        </div>
   <div className='left'>
     <div className="content">
     <h4> ارائه مدرک معتبر </h4>
        <p> ... بهترین راه برای ساختن رزومه حرفه ای </p>
     </div>
    </div>
 
   </section>
   <section className='bottom'>
   <div className='right'>
     <div className="content">
        <h4>همکاری در آموزش</h4>
        <p> ... به اساتید آموزشی ما در بامبو بپیوندید </p>
     </div>
    </div>
    <div className='left'>
        
    </div>
   </section>
  </section>
  )
}

export default BannerSection