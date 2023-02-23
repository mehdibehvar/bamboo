import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { actionType, store } from "../../contexts/store";
import { LogoSvg } from "./LogoSvg";
import "./Navbar.scss";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import jwt_decode from "jwt-decode";
import { getStudentById } from "../../utils/httpclient";
import { getItem, removeItem } from "../../utils/storage.service";
import styled from "@emotion/styled";
const Navbar = () => {
  const { state, dispatch } = useContext(store);
  const { studentModel } = state.userInfo;
  const token=getItem("token");
  const [showTooltip, setShowTooltip] = useState(false);
  const [role, setRole] = useState("");
  useEffect(() => {
    if (token) {
      const decodeToken = jwt_decode(token);
      const { _id, role } = decodeToken;
      setRole(role);
      try {
        (async () => {
          const userInfo = await getStudentById(_id);
          dispatch({
            type: actionType.get_user_info,
            payload: userInfo.result,
          });
        })();
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token,dispatch]);

  const handleLogout = () => {
    dispatch({
      type: actionType.logout_user,
    });
removeItem("token");

  };
  const Avatar=styled("span")(({theme})=>(props)=>(
    { 
        width:50,
        height:50,
        backgroundImage:`url(${props.url})`,
        backgroundSize:"cover",
        borderRadius:25
     
      }
  ));
  return (
    <nav className="navbar">
      <div className="navbar_Links_section">
        <div className="logo_section">
          <NavLink to="/">
            <LogoSvg />
            <span className="logo_name">بامبو</span>
          </NavLink>
        </div>
        <ul className="link_list">
          <li>
            <NavLink to="/courses" className="nav_links">
              دوره ها
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="nav_links">
              مقالات
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="nav_links">
              خدمات{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="nav_links">
              درباره ما
            </NavLink>
          </li>
        </ul>
        <div className="register_section">
          {studentModel ? (
            <div className="w-100 flex-row-center gap-8">
              <span>{role === "student" ? "دانش اموز:" : "استاد:"}</span>{" "}
              <span>{studentModel.fullName}</span>{" "}
              <span onClick={() => setShowTooltip(!showTooltip)}>
                <FaUserAlt />
              </span>
              {showTooltip ? (
                <div className="profile_tooltip">
                  <span onClick={handleLogout}>
                    <FiLogOut />
                    خروج
                  </span>
                </div>
              ) : null}
             <Avatar url={studentModel.profile}/>
            </div>
          ) : (
            <>
              {" "}
              <NavLink to="/login">ورود</NavLink>
              <NavLink to="/register">
                {" "}
                <div>
                  <button className="register_button"></button>
                  <span>ثبت نام</span>
                </div>
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="navbar_bottom_border"></div>
    </nav>
  );
};

export default Navbar;
