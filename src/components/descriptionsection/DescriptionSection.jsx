import styled from "@emotion/styled";
import { getItem } from "../../utils/storage.service";
import "./descriptionsection.scss";
import jwt_decode from "jwt-decode";
import { CourseRegister } from "../../utils/httpclient";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";
import { store } from "../../contexts/store";
const LogoWrapper = styled("span")(({ theme }) => (props) => ({
  width: 55,
  height: 55,
  backgroundSize: "cover",
  backgroundImage: `url(${props.url})`,
}));
const DescriptionSection = ({ course }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [aciveRegister, setAciveRegister] = useState(true);
  const {state}=useContext(store);
  const {studentModel}=state.userInfo;
  const {_id}=studentModel;
  const courseStudents=course.students;
  const navigate = useNavigate();
  const token = getItem("token");
  const handleCourseRegister = async () => {
    if (token) {
      const decodeToken = jwt_decode(token);
      const { _id } = decodeToken;
      const response = await CourseRegister(_id, course._id);
      if (response.success) {
        enqueueSnackbar(response.message[0].message, {
          variant: "success",
          autoHideDuration: 2000,
        });
        setAciveRegister(false);
      }
    } else {
      navigate("/login");
    }
  };
useEffect(() => {
 const isuserRegistered=courseStudents.some((item)=>item._id===_id);
if(isuserRegistered){
  setAciveRegister(false);
}
}, [aciveRegister,_id,courseStudents])

  return (
    <section className="description_section">
      <div className="right">
        <h3>توضیحات:</h3>
        <p>
          امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک
          سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است.
          به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه
          ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و
          به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار
          گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که
          می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و
          به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار
          گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که
          می توان بوسیله
        </p>
      </div>
      <div className="left">
        <div className="card">
          <div className="header">
            <LogoWrapper url="../../src/assets/images/480px-Unofficial_JavaScript_logo_2.svg.png" />

            <span>{course.title}</span>
          </div>
          <div className="price_section">
            <div className="price">
              <span>قیمت دوره : </span>
              <span>
                {course.cost} <span>تومان</span>
              </span>
            </div>
            <div className="discount">
              <span>تخفیف : </span>
              <span>% 10</span>
            </div>
            <div className="pay_price">
              <span>مبلغ قابل پرداخت :</span>
              <span>
                {course.cost - (course.cost * 10) / 100} <span>تومان</span>
              </span>
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
            {!aciveRegister ? (
              <button
                className="register_button deactive_button"
              > شما در این دوره ثبت نام کرده اید.
              </button>
            ) : (
              <button
                onClick={handleCourseRegister}
                className="register_button "
              >
                ثبت نام در دوره
              </button>
            )}
          </div>
        </div>
        <div className="frame"></div>
      </div>
    </section>
  );
};

export default DescriptionSection;
