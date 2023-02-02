import React from 'react'
import { useState } from 'react';
import { Typography, Button,TextField, SvgIcon, Grid, Container, createTheme, styled} from '@material-ui/core'
import useStyles from './style';
import './textfield.css';
import { flexbox } from '@mui/system';

import bgImg from '../assets/bg.svg';
import blueHomeIcon from '../assets/home.svg';
import bambooLogo from '../assets/bamboo.svg';
import instaIcon from '../assets/insta.svg';
import teleIcon from '../assets/tele.svg';
import youtubeIcon from '../assets/yout.svg';
import whatsAppIcon from '../assets/wha.svg';
import whiteHomeIcon from '../assets/home12.svg';

const Login = () => {
  const classes = useStyles();


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

      //const phonePattern = /^((|0|98|098|0098|\\+98)[1-8][1-9][2-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])/$

      let valid = true;
      if(name == '') {
        setNameError(true)
      }
      if(email == '') {
        setEmailError(true)
      }
      console.log('1');
      //console.log(phonePattern.test("09111755639"));
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

  return (
    <Container maxWidth="xl" style={{ height: '100vh', margin:'0', padding: '0' }}>
        <Grid 
        container
        className='container'
        //direction = {{xs: 'column-reverse', lg:'row'}}
        direction='row'
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
            <Grid item xs={12} md={6} lg={5} className={classes.register} style={{height: '100vh'}}>
                <Grid 
                container
                justifyContent="space-between"
                alignItems='center'
                style={{marginTop:'50px'}}
                className={classes.formHeading}>
                    <Typography variant='h2' style={{fontSize: '2.5rem'}}>ورود</Typography>
                    <Button className={classes.homeIcon}>
                        <img style={{width: "30px"}} src={blueHomeIcon} alt="home-icon" />
                    </Button>
                </Grid>

                <form id='form' dir='rtl' className={classes.form} noValidate autoComplete='off' onSubmit={handleSubmit}
                style={{marginTop:'50px'}}>
                    <TextField
                      onChange={(e) => setName(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      label="نام کاربری"
                      className="textfieldRtl"
                      dir="rtl"
                      required
                      type="text"
                      error={nameError}
                    />
                    
                    <TextField
                      onChange={(e) => setPassword(e.target.value)}
                      variant="filled"
                      fullWidth
                      autoFocus
                      label="رمز عبور"
                      className="textfieldRtl"
                      dir="rtl"
                      required
                      type="password"
                      error={passwordError}
                    />
                    
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" className={classes.btnHolder}>
                        <Button type='button' variant="contained" className={`${classes.btn} ${classes.registerBtn}`} size='large'>ورود</Button>
                        <Button type="submit" variant="contained" className={`${classes.btn} ${classes.loginBtn}`} size='large'>ثبت نام</Button>
                    </Grid>
                </form>

            </Grid>
            
        </Grid>

    </Container>
  )
}

export default Login