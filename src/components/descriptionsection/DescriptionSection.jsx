import styled from "@emotion/styled";
import "./descriptionsection.scss"
const LogoWrapper=styled("span")(({theme})=>(props)=>(
    { 
        width:55,
        height:55,
        backgroundSize:"cover",
     backgroundImage:`url(${props.url})`,
      }
 ));
const DescriptionSection = () => {
  return (
  <section className="description_section">
    <div className="right">
        <h3>توضیحات:</h3>
        <p>
        امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و
 مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار
 خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب
 و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان 
برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری 
روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا 
اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله 
        </p>
    </div>
    <div className="left">
        <div className="card">
            <div className="header">
              <LogoWrapper url="../../src/assets/images/480px-Unofficial_JavaScript_logo_2.svg.png"/>
       
               <span>دوره جاوا اسکریپت</span>
            </div>
            <div className="price_section">
                  <div className="price">
                    <span>قیمت دوره : </span>
                    <span>20000 <span>تومان</span></span>
                  </div>
                  <div className="discount">
                  <span>تخفیف : </span>
                    <span>% 10</span>
                  </div>
                  <div className="pay_price">
                    <span>مبلغ قابل پرداخت :</span>
                    <span>20000 <span>تومان</span></span>
                  </div>
            </div>
            <div className="timing">
                    <div>
                    <span className="time"></span>
                    <span className="time"></span>
                    </div> 
                    <span className="seperator">:</span>
                  <div>
                  <span className="time"></span>
                  <span className="time"></span>
                    </div> 
                    <span className="seperator">:</span>
                   <div>
                   <span className="time"></span>
                   <span className="time"></span>
                    </div> 


            </div>
            <div className="register">
                <button className="register_button">ثبت نام در دوره</button>
            </div>
        </div>
        <div className="frame"></div>
    </div>
  </section>
  )
}

export default DescriptionSection