import AchivCard from "./AchivCard";
import "./achivments.scss";

const achivData = [
  {
    icon: "EducatIcon",
    value: 219,
    title: "دوره",
    text: "تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت  .در سایت ثبت شده و قابل دسترسی است ",
  },
  {
    icon: "EducatIcon",
    value: 219,
    title: "دوره",
    text: "تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت  .در سایت ثبت شده و قابل دسترسی است ",
  },
  {
    icon: "EducatIcon",
    value: 219,
    title: "دوره",
    text: "تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت  .در سایت ثبت شده و قابل دسترسی است ",
  },
];
const Achivments = () => {
  return (
    <section className="achivments_section">
     
      <div className="achivments_cards">
        {achivData.map((item, index) => (
          <div key={index} className="grid">
            <AchivCard  item={item} />
          </div>
        ))}
        <div className="achiv_trans_cards"></div>
      </div>
      <div className="transparent_cover"></div>
    </section>
  );
};

export default Achivments;
