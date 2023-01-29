import React from 'react'
import { useState } from 'react';
import { Typography, Button,TextField, SvgIcon, Grid, Container, createTheme, styled} from '@material-ui/core'
import useStyles from './style';
import './textfield.css';
import { flexbox } from '@mui/system';
import { useFormik } from 'formik'
import * as yup from 'yup'

import bgImg from '../assets/bg.svg';
import blueHomeIcon from '../assets/home.svg';
import bambooLogo from '../assets/bamboo.svg';
import instaIcon from '../assets/insta.svg';
import teleIcon from '../assets/tele.svg';
import youtubeIcon from '../assets/yout.svg';
import whatsAppIcon from '../assets/wha.svg';
import whiteHomeIcon from '../assets/home12.svg';

import { JalaliDateTime } from 'jalali-date-time';

const Register = () => {
  
  const classes = useStyles();

/*
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');


    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [idNumberError, setIdNumberError] = useState(false);
    const [birthDateError, setBirthDateError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault()

      setNameError(false)
      setEmailError(false)
      setPhoneError(false)
      setIdNumberError(false)
      setBirthDateError(false)
      setPasswordError(false)

      //const phonePattern = /^((|0|98|098|0098|\\+98)[1-8][1-9][2-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/
      //const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      let valid = true;
      if(name == '') {
        setNameError(true)
      }
      //console.log(emailPattern.test('test@gmail.com'));
      if(email == '') {
        setEmailError(true)
      }
      
      //console.log(phonePattern.test(phone));
      if(phone == '' ) {
        setPhoneError(true)
        valid = false
      }
      if(idNumber == '') {
        setIdNumberError(true)
      }
      if(birthDate == '') {
        setBirthDateError(true)
      }
      if(password == '') {
        setPasswordError(true)
      }
      

      if(valid){
        console.log('yes');
      }
    }
    */

    const validationSchema = yup.object({
      userName: yup.string().required("نام کاربری الزامیست"),
      email: yup.string().email("ایمیل صحیح وارد کنید").required('ایمیل الزامیست') ,
      phoneNumber: yup.number().required("شماره تلفن الزامیست"),
      idNumber: yup.number().required("کد ملی الزامیست"),
      birthDate: yup.number().required("تاریخ تولد الزامیست"),
      //password: yup.required("رمز الزامیست")


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
    <Container maxWidth="xl" style={{ height: '100vh', margin:'0', padding: '0' }}>
        <Grid 
        container
        className='container'
        //direction = {{xs: 'column-reverse', lg:'row'}}
        direction='row-reverse'
        //sx={{ flexDirection: { xs: 'column-reverse', md: 'row'} }}
        justifyContent="space-between"
        alignItems="strech"
        >


          <Grid item xs={12} md={6} lg={7} className={classes.posterContainer}
            style={{backgroundImage : `url(${bgImg})`}}
            >
                <Grid className={classes.poster}>
                    <Grid container justifyContent="space-between" alignItems='center' sx={{height:{xs: "100px", lg: "500px"}}} className={classes.titleAndLogo}>
                        <Typography variant='h4'>آکادمی آموزشی بامبو</Typography>
                        <img src={bambooLogo} alt="bamboo-logo" />
                    </Grid>
                    
                    <Grid container direction='row' justifyContent="space-between" alignItems='center' style={{marginTop: "30px"}} className={classes.icons}>
                        <Button><img src={whatsAppIcon} alt="whatsapp-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={teleIcon} alt="telegram-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={instaIcon} alt="insta-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={youtubeIcon} alt="youtube-logo" style={{width: "25px"}}/></Button>
                    </Grid>
                </Grid>
                
                <Grid className={classes.icons} style={{position: 'absolute', bottom:'0'}}>
                    <Button><img src={whiteHomeIcon} alt="home-logo" style={{width: "25px", marginBottom: '10px'}}/></Button>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={5} className={classes.register} >
                <Grid 
                container
                justifyContent="space-between"
                alignItems='center'
                className={classes.formHeading}>
                    <Typography variant='h2' style={{fontSize: '2.5rem'}}>ثبت نام</Typography>
                    <Button className={classes.homeIcon}>
                        <img style={{width: "30px"}} src={blueHomeIcon} alt="home-icon" />
                    </Button>
                </Grid>

                <form id='form' dir='rtl' className={classes.form} noValidate /*onSubmit={handleSubmit}*/ onSubmit={formik.handleSubmit}>
                    <TextField
                      //onChange={(e) => setName(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='userName'
                      name='userName'
                      label="نام کاربری"
                      className="textfieldRtl"
                      required
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
                      //onChange={(e) => setEmail(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      required
                      id='email'
                      name='email'
                      label="ایمیل"
                      className="textfieldRtl"
                      type="text"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      FormHelperTextProps={{
                        className: classes.helperText
                      }}
                      //error={emailError}
                    />
                    
                    <TextField
                      //onChange={(e) => setPhone(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='phoneNumber'
                      name='phoneNumber'
                      label="شماره موبایل "
                      className="textfieldRtl"
                      dir="rtl"
                      required
                      type="number"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                      helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                      FormHelperTextProps={{
                        className: classes.helperText
                      }}
                      //error={phoneError}
                    />
                    
                    <TextField
                      //onChange={(e) => setIdNumber(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='idNumber'
                      name='idNumber'
                      label="کد ملی"
                      className="textfieldRtl"
                      dir="rtl"
                      required
                      type="number"
                      value={formik.values.idNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
                      helperText={formik.touched.idNumber && formik.errors.idNumber}
                      FormHelperTextProps={{
                        className: classes.helperText
                      }}
                      //error={idNumberError}
                    />
                    
                    <TextField
                      //onChange={(e) => setBirthDate(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='birthDate'
                      name='birthDate'
                      label="تاریخ تولد"
                      className="textfieldRtl"
                      dir="rtl"
                      required
                      type="text"
                      value={formik.values.birthDate}
                      onChange={formik.handleChange}
                      error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                      helperText={formik.touched.birthDate && formik.errors.birthDate}
                      FormHelperTextProps={{
                        className: classes.helperText
                      }}
                      //error={birthDateError}
                    />
                    
                    <TextField
                      //onChange={(e) => setPassword(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      id='password'
                      name='password'
                      label="رمز عبور"
                      className="textfieldRtl"
                      dir="rtl"
                      required
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                      FormHelperTextProps={{
                        className: classes.helperText
                      }}
                      //error={passwordError}
                    />
                    
                    



                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" className={classes.btnHolder}>
                        <Button type='submit' variant="contained" className={`${classes.btn} ${classes.registerBtn}`} size='large'>ثبت نام</Button>
                        <Button variant="contained" className={`${classes.btn} ${classes.loginBtn}`} size='large'>ورود</Button>
                    </Grid>
                </form>

            </Grid>
            
        </Grid>

    </Container>
  )
}

export default Register