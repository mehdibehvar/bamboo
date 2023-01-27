import  './Footer.scss'
import NewsLetterForm from './NewsLetterForm'
import {BsWhatsapp} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineYoutube} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import { imageUrl } from '../constant/footerData';
const Footer = () => {
  return (
<>
<footer className='footer'>
     <section className='top_section'>
      <div className='aboutus_section'>
        <h3>درباره بامبو</h3>
        <p>
        بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران  است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و  دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد
        </p>
      </div>
      <div className='newsletter_section'>
        <h3>خبرنامه</h3>
        <NewsLetterForm/>
      </div>
     </section>
     <div className='seperator_border'></div>
     <section className='middle_section'>
      <div className='first_section'>
        <h4>ارتباط با ما</h4>
        <ul>
          <li>iwillbemyvision@gmail.com</li>
          <li>iwillbemyvision@gmail.com</li>
          <li>
            <span><BsWhatsapp/></span>
            <span><TbBrandTelegram/></span>
            <span><AiOutlineYoutube/></span>
            <span><AiOutlineInstagram/></span>
          </li>
        </ul>

      </div>
      <div className='second_section'>
        <h4>همراه باشید</h4>
        <ul>
          <li>سوالات رایج</li>
          <li>قوانین</li>
          <li>خدمات</li>
        </ul>
      </div>
      <div className='third_section'>
        {imageUrl.map((item)=> <div className='card' key={item.alt}>
          <img src={item.url} alt={item.alt}/>
        </div>)}
      </div>
     </section>
    </footer>
      <section className='bottom_section'>
      <p>کليه حقوق محصولات و محتوای اين سایت متعلق به بامبو می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست</p>
     </section>
</>
  )
}

export default Footer