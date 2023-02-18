import React from 'react'
import { Button,TextField, Grid } from '@mui/material'

import './textfield.css';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { styled } from '@mui/system';


const Form = () => {

    const validationSchema = yup.object({
        userName: yup.string().required("نام کاربری الزامیست"),
        email: yup.string().email("ایمیل صحیح وارد کنید").required('ایمیل الزامیست') ,
        phoneNumber: yup.number().required("شماره تلفن الزامیست"),
        idNumber: yup.number().required("کد ملی الزامیست"),
        birthDate: yup.number().required("تاریخ تولد الزامیست"),
        password: yup.string().required("رمز الزامیست").min(6, 'رمز عبور باید بیشتر از 6 کاراکتر باشد')
  
  
      })
  
      const formik = useFormik({
        initialValues:{
          userName: "",
          email: "",
          phoneNumber: "",
          idNumber: "",
          birthDate: "",
          password: ""
  
        },
        onSubmit: (values) => {
          console.log(JSON.stringify(values));
        },
        validationSchema: validationSchema
      })
      


    const RegisterBtn = styled(Button)(({theme}) => ({
        height: "50px",
        width: "20%",
        boxShadow: "none",
        border: 'none',
        borderRadius: '0',
        background: "#004458",
        color: 'white',
        marginRight: "20px",
        whiteSpace: "nowrap",
        minWidth: "max-content",
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          marginRight: '0',
          marginBottom: '15px'
      },
      '&:hover' : {
        color: '#004458'
    }
    }))
    const LoginBtn = styled(Button)(({theme}) => ({
        height: "50px",
        width: "20%",
        boxShadow: "none",
        border: 'none',
        color: '#004458',
        background: "transparent",
        borderRadius: '0',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
  }))

  return (
    <form id='form' dir='rtl' className='form' noValidate onSubmit={formik.handleSubmit}>
                    
                    <TextField
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='userName'
                      name='userName'
                      label="نام کاربری :"
                      className="textfieldRtl"
                      type="text"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      error={formik.touched.userName && Boolean(formik.errors.userName)}
                      helperText={formik.touched.userName && formik.errors.userName}
                      FormHelperTextProps={{
                        className:'helperText'
                      }}
                    />

                     <TextField
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='email'
                      name='email'
                      label="ایمیل :"
                      className="textfieldRtl"
                      type="text"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      FormHelperTextProps={{
                        className: 'helperText'
                      }}
                    />
                    
                    <TextField
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='phoneNumber'
                      name='phoneNumber'
                      label="شماره موبایل : "
                      className="textfieldRtl"
                      dir="rtl"
                      type="number"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                      helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                      FormHelperTextProps={{
                        className: 'helperText'
                      }}
                    />
                    
                    
                    <TextField
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='idNumber'
                      name='idNumber'
                      label="کد ملی :"
                      className="textfieldRtl"
                      dir="rtl"
                      onWheel={event => { event.preventDefault(); }} 
                      type="number"
                      value={formik.values.idNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
                      helperText={formik.touched.idNumber && formik.errors.idNumber}
                      FormHelperTextProps={{
                        className: 'helperText'
                      }}
                    />
                    
                    
                    <TextField
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='birthDate'
                      name='birthDate'
                      label="تاریخ تولد :"
                      className="textfieldRtl"
                      dir="rtl"
                      type="text"
                      value={formik.values.birthDate}
                      onChange={formik.handleChange}
                      error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                      helperText={formik.touched.birthDate && formik.errors.birthDate}
                      FormHelperTextProps={{
                        className: 'helperText'
                      }}
                    />
                    
                    <TextField
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='password'
                      name='password'
                      label="رمز عبور :"
                      className="textfieldRtl"
                      dir="rtl"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                      FormHelperTextProps={{
                        className: 'helperText'
                      }}
                    /> 
                    
                    <div></div>



                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" className="btnHolder">
                        <RegisterBtn type='submit' variant="contained" size='large'>ثبت نام</RegisterBtn>
                        <LoginBtn variant="contained" size='large'>ورود</LoginBtn>
                    </Grid>
                </form>
  )
}

export default Form