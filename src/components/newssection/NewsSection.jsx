import { ChevronLeftIcon, ChevronRightIcon } from "../common/button/icons";
import "./newssectionstyles.scss";

const NewsSection = () => {
  return (
    <section className="news_section">
      <article className="right">
        <div className="frame"></div>
        <div>
          <h4 className="title">اخبار و مقالات</h4>
          <p className="text">
          دسترسی به جدید ترین و مفید ترین مقالات
تالیف شده توسط معتبر ترین روزنامه ها و رسانه ها
، در دسته بندی های گوناگونی همچون طراحی ، هنر
برنامه نویسی ، اقتصاد،  فلسفه ، فیزیک ، شیمی و
          </p>
        </div>
        <div className="button_wrapper">
          <div className="see_courses">
            <span> مشاهده مقالات</span>
          </div>
        </div>
      </article>
      <section className="left">
        <div className="image_wrapper">
            <div className="subtitle">
                <span>مقایسه ری اکت با فریمورک های جدید جاوا اسکریپت</span>
            </div>
            <div className="frame">
            <div>
            <ChevronRightIcon/>
                <ChevronLeftIcon/>
            </div>
            </div>
        </div>
      </section>
    </section>
  );
};

export default NewsSection;
