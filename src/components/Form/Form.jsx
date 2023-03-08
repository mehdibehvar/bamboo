import React, { useContext } from "react";
import {
  Button,
  Grid,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Loading from "../loading/Loading";
import "./textfield.scss";
import * as yup from "yup";
import { styled } from "@mui/system";
import { actionType, store } from "../../contexts/store";
import { registerUser, uploadImage } from "../../utils/httpclient";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { NavLink } from "react-router-dom";

const RegisterBtn = styled(Button)(({ theme }) => ({
  height: "50px",
  width: "20%",
  boxShadow: "none",
  border: "none",
  borderRadius: "0",
  background: "#004458",
  color: "white",
  marginRight: "20px",
  whiteSpace: "nowrap",
  minWidth: "max-content",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginRight: "0",
    marginBottom: "15px",
  },
  "&:hover": {
    color: "#004458",
  },
}));
const LoginBtn = styled(Button)(({ theme }) => ({
  height: "50px",
  width: "20%",
  boxShadow: "none",
  border: "none",
  color: "#004458",
  background: "transparent",
  borderRadius: "0",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Form = () => {
  const { state, dispatch } = useContext(store);
  const { loading,error } = state.userInfo;
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const defaultValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    nationalId: "",
    birthDate: "",
    password: "",
    profile: "",
  };
  const schema = yup.object().shape({
    fullName: yup.string().required("نام کاربری الزامیست"),
    email: yup
      .string()
      .email("ایمیل صحیح وارد کنید")
      .required("ایمیل الزامیست"),
    phoneNumber: yup.number().required("شماره تلفن الزامیست"),
    nationalId: yup.number().required("کد ملی الزامیست"),
    birthDate: yup.string().required("تاریخ تولد الزامیست"),
    password: yup
      .string()
      .required("رمز الزامیست")
      .min(6, "رمز عبور باید بیشتر از 6 کاراکتر باشد"),
  });
  const {
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {

    dispatch({
      type: actionType.login_request,
    });
    try {
      const imageCloudUrl = await uploadImage(data.profile);
      const registerData = { ...data, profile: imageCloudUrl };
      const response = await registerUser(registerData);
      dispatch({
        type: actionType.register_success,
        payload: response.result,
      });
      if(response.success){
        enqueueSnackbar(response.message[0].message, {
          variant: "success",
          autoHideDuration: 2000, 
        });
      }
      navigate("/login");
    } catch (error) {
      dispatch({
        type: actionType.login_error,
        payload: "حطایی رخ داده",
      });
      enqueueSnackbar("حطایی رخ داده", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form
          id="form"
          className="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          {error?<h4>خطایی رخ داده است</h4>:null}
          <FormControl className="textfieldRtl"  fullWidth sx={{ mb: 1,direction:"rtl" }}>
            <InputLabel sx={{ direction:"rtl" }} htmlFor="fullName" error={Boolean(errors.fullName)}>
              نام کامل
            </InputLabel>
            <OutlinedInput   label="fullName " {...register("fullName")} />
            {errors.fullName && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.fullName.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className="textfieldRtl" fullWidth sx={{ mb: 1 }}>
            <InputLabel htmlFor="lesson2" error={Boolean(errors.email)}>
              ایمیل
            </InputLabel>
            <OutlinedInput label="توضیخات" {...register("email")} />
            {errors.email && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className="textfieldRtl" fullWidth sx={{ mb: 1 }}>
            <InputLabel htmlFor="password" error={Boolean(errors.password)}>
              رمز عبور
            </InputLabel>
            <OutlinedInput label="password" {...register("password")} />
            {errors.password && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>        
          <FormControl className="textfieldRtl" fullWidth sx={{ mb: 1 }}>
            <InputLabel
              htmlFor="phoneNumber"
              error={Boolean(errors.phoneNumber)}
            >
              شماره تلفن
            </InputLabel>
            <OutlinedInput label="phoneNumber " {...register("phoneNumber")} />
          </FormControl>      
          <FormControl className="textfieldRtl" fullWidth sx={{ mb: 1 }}>
            <InputLabel htmlFor="phoneNumber" error={Boolean(errors.birthDate)}>
              تاریخ تولد
            </InputLabel>
            <OutlinedInput label="birthDate " {...register("birthDate")} />
          </FormControl>
          <FormControl className="textfieldRtl" fullWidth sx={{ mb: 1 }}>
            <InputLabel htmlFor="nationalId" error={Boolean(errors.nationalId)}>
              کدملی
            </InputLabel>
            <OutlinedInput label="کدملی" {...register("nationalId")} />
            {errors.nationalId && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.nationalId.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className="textfieldRtl" fullWidth sx={{ mb: 1 }}>
            <InputLabel htmlFor="image-input">عکس پروفایل</InputLabel>
            <OutlinedInput id="image-input" name="profile" type="file" {...register("profile")} />
          </FormControl>

          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
            className="btnHolder"
          >
            <RegisterBtn type="submit" variant="contained" size="large">
              ثبت نام
            </RegisterBtn>
            <NavLink to="/login">
                <LoginBtn variant="contained" size="large">
              ورود
            </LoginBtn>
            </NavLink>
          
          </Grid>
        </form>
      )}
    </>
  );
};

export default Form;
