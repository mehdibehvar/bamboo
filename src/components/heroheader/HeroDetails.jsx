import { NavLink } from "react-router-dom";

export const HeroTitle = () => {
  return (
    <h3 className="hero_title">
      باید راه بهتری برای آموزش ساخته میشد ،
      <br />
      پس ما ساختیمش...
    </h3>
  );
};
export const HeroDescription = () => {
  return (
    <p className="hero_description">
      سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین آشنایی
      جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم با
      راهکار های نوین ، فرصتی . برای افراد خواهان پیشرفت فراهم کنیم
    </p>
  );
};
export const HeroViewCourses = () => {
  return (
    <NavLink to="/courses" className="hero_viewcourses">
      {" "}
      <span>مشاهده دوره ها</span>
    </NavLink>
  );
};
