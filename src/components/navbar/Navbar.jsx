import { NavLink } from "react-router-dom";
import { LogoSvg } from "./LogoSvg";
import "./Navbar.scss";

const Navbar = () => {
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
          <NavLink to="/login">ورود</NavLink>
          <NavLink to="/register"> <div>
            <button className="register_button"></button>
            <span>ثبت نام</span>
          </div></NavLink>

         
        </div>
      </div>
      <div className="navbar_bottom_border"></div>
    </nav>
  );
};

export default Navbar;
