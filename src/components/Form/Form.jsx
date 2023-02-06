import React from 'react'
import { Button,TextField, Grid } from '@material-ui/core'
import useStyles from './style';
import './textfield.css';
import { useFormik } from 'formik'
import * as yup from 'yup'



const Form = () => {
    const classes = useStyles();

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
  
  return (
    <form id='form' dir='rtl' className={classes.form} noValidate onSubmit={formik.handleSubmit}>
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
                        className: classes.helperText
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
                        className: classes.helperText
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
                        className: classes.helperText
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
                        className: classes.helperText
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
                        className: classes.helperText
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
                        className: classes.helperText
                      }}
                    />
                    
                    <div></div>



                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" className={classes.btnHolder}>
                        <Button type='submit' variant="contained" className={`${classes.btn} ${classes.registerBtn}`} size='large'>ثبت نام</Button>
                        <Button variant="contained" className={`${classes.btn} ${classes.loginBtn}`} size='large'>ورود</Button>
                    </Grid>
                </form>
  )
}

export default Form