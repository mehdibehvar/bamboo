import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getPagination } from "../../utils/httpclient";
import CourseCard from "../coursecard/CourseCard";
import Loading from "../loading/Loading";
import "./paginationsection.scss";
const PaginationSection = () => {
  const pagesize = 8;
  const [pagenumber, setPagenumber] = useState(1);
  const [category, setCategory] = useState("all");
  const [result, setResult] = useState(null);
  const pagesValue = Math.ceil(result?.count / pagesize);
  useEffect(() => {
    (async () => {
      const pagination = await getPagination(pagenumber, pagesize);
      setResult(pagination.result);
    })();
  }, [pagenumber, pagesize]);
  const handleIncreasePagenumber = () => {
    if (pagenumber === pagesValue) return;
    setPagenumber((prev) => prev + 1);
  };
  const handleDecreasePagenumber = () => {
    if (pagenumber === 1) return;
    setPagenumber((prev) => prev - 1);
  };
  return (
    <section className="pagination_section">
      <header>
        <div>
          <h4>دوره های آموزشی</h4>
        </div>
        <div className="category">
          <span onClick={()=>setCategory("all")} className={category==="all"?"active_link":""}>همه دوره ها </span>
          <span onClick={()=>setCategory("newest")} className={category==="newest"?"active_link":""}>جدیدترین ها </span>
          <span  onClick={()=>setCategory("expensive")}  className={category==="expensive"?"active_link":""}>گران ترین ها </span>
          <span  onClick={()=>setCategory("not-compelet")} className={category==="not-compelet"?"active_link":""}>تکمیل نشده ها</span>
        </div>
      </header>
      {result ? (
        <>
          <section className="grid_section">
            {result.courses.map((course, index) => (
              <CourseCard course={course} key={course._id} />
            ))}
          </section>
          <section className="change_page">
            <div>
              <button
                className="next_button"
                onClick={handleIncreasePagenumber}
              >
                <BsChevronRight />
              </button>
         <div className="numbers_wrapper">
         {[...Array(pagesValue).keys()].map((item) => (
                <button className={pagenumber===item+1?"active":''} key={item}>{item + 1}</button>
              ))}
         </div>
              <button
                className="prev_button"
                onClick={handleDecreasePagenumber}
              >
                <BsChevronLeft />
              </button>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default PaginationSection;
