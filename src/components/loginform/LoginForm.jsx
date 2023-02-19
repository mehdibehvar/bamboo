import "./loginform.scss";
import {  NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormErrors from "../footer/FormErrors";
import { useContext } from "react";
import { actionType, store } from "../../contexts/store";
import { loginUser } from "../../utils/httpclient";
import { setItem } from "../../utils/storage.service";
import Loading from "../loading/Loading";

const LoginForm = () => {
  const {state,dispatch}=useContext(store);
  const {loading,error} =state.userInfo;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLogin=async (data)=>{
    dispatch({
      type:actionType.login_request
    });
    try {
        const response=await loginUser(data);
      dispatch({
        type:actionType.login_success,
        payload:response.result
      });
      setItem("token",JSON.stringify(response.result.jwtToken));
      navigate("/");
    } catch (error) {
     
      dispatch({
        type:actionType.login_error,
        payload:"حطایی رخ داده"
      })
    }
  }
  return (
  <>
  {loading?<Loading/>:<section className="login_form flex-column">
      <h3 className="brand-color fs-60">ورود کاربر</h3>
      <form className="flex-column" onSubmit={handleSubmit(onLogin)}>
      {error?<span className="danger-color fs-24">{error}</span>:null}
        <input
          placeholder="ایمیل:"
          {...register("email", {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          })}
          className="email_input"
        />
         {errors.email?<FormErrors errors={errors}/>:null}
        <input placeholder="رمز عبور:" {...register("password",{required:true,minLength:4,maxLength:22})} className="pass_input" />
        {errors.password?<FormErrors errors={errors}/>:null}
        <div className="remember_section flex-between w-100">
          <div className="brand-color flex-row-center">
            <input type="checkbox" id="rememberme"  {...register("remember")}/>
            <label htmlFor="rememberme">مرا به خاطر بسپار</label>
          </div>
          <NavLink to="/">
            <span className="brand-color">فراموشی رمز</span>
          </NavLink>
        </div>
        <div className="buttons_wrapper w-100">
          <NavLink to="/register" className="register brand-color">
            ثبت نام
          </NavLink>
          <button  className="submit_button">ورود</button>
        </div>
      </form>
    </section>}
  </>
  );
};

export default LoginForm;
