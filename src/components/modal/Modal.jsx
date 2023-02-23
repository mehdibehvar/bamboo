import * as React from "react";
import Modal from "@mui/material/Modal";
import "./modal.scss";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
const CardLogo = styled(Box)(({ theme }) => (props) => ({
  width: "100%",
  height: 296,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${props.url})`,
}));
const SliderBar = styled(Box)(({ theme }) => (props) => ({
  width: props.percent,
  height: "100%",
  backgroundColor: "#004458",
  
}));

export default function CourseModal({ course, open, handleClose }) {
  const barPercent = (course?.students?.length / course.capacity) * 100;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="course_modal">
          <div className="course_info">
            <div className="top_section">
              <div className="details">
                <h6>{course.title} </h6>
                <div className="teacher">
                  <span>مدرس:</span>
                  <span>{course.teacher.fullName}</span>
                </div>
                <div className="capacity">
                  <div>
                    <span>ظرفیت:</span>
                    <span>{course.capacity.toLocaleString("fa-IR")} نفر</span>
                  </div>
                </div>
                <div className="date">
                  <div>
                    <span>تاریخ شروع : </span>
                    <span>
                      {new Date(course.startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span>تاریخ پایان : </span>
                    <span>
                      {new Date(course.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="price">
                  <span>قیمت:</span>
                  <span>{course.cost.toLocaleString("fa-IR")} تومان</span>
                </div>
              </div>
              <CardLogo url={`${course.lesson.image}`} />
            </div>
            <div className="course_status">
             <span> وضعیت دوره:</span>
              <div className="capacity_bar">
                <span>{Math.ceil(barPercent)}%</span>
                <SliderBar percent={`${barPercent}%`} />
              </div>
            </div>
            <div className="border_bottom"></div>
          </div>
          <div className="see_course">
            <NavLink to={`/course/${course?._id}`}>
              <button>مشاهده کامل</button>
            </NavLink>
          </div>
        </div>
      </Modal>
    </div>
  );
}
