import React from 'react'
import { Typography, Button, Grid, Container, ThemeProvider } from '@material-ui/core'
import { createTheme } from '@mui/material/styles';
import useStyles from '../components/Form/style';
import '../components/Form/textfield.css';

import bgImg from '../assets/bg.svg';
import blueHomeIcon from '../assets/home.svg';
import bambooLogo from '../assets/bamboo.svg';
import instaIcon from '../assets/insta.svg';
import teleIcon from '../assets/tele.svg';
import youtubeIcon from '../assets/yout.svg';
import whatsAppIcon from '../assets/wha.svg';
import whiteHomeIcon from '../assets/home12.svg';
import Form from '../components/Form/Form';


const Register = () => {

  const theme = createTheme({
    typography: {
        fontFamily: 'Yekan'
    }
    
});
   
  
  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl" style={{ height: '100vh', margin:'0', padding: '0' }}>
        <Grid 
        container
        className='container'
        direction='row-reverse'
        justifyContent="space-between"
        
        >


          <Grid item xs={12} md={6} lg={7} className={classes.posterContainer}
            style={{backgroundImage : `url(${bgImg})`}}
            >
                <Grid className={classes.poster}>
                    <Grid container justifyContent="space-between" alignItems='center' sx={{height:{xs: "100px", lg: "500px"}}} className={classes.titleAndLogo}>
                        <Typography variant='h4' className='boldFont'>آکادمی آموزشی بامبو</Typography>
                        <img src={bambooLogo} alt="bamboo-logo" />
                    </Grid>
                    
                    <Grid container direction='row' justifyContent="space-between" alignItems='center' style={{marginTop: "30px"}} className={classes.icons}>
                        <Button><img src={whatsAppIcon} alt="whatsapp-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={teleIcon} alt="telegram-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={instaIcon} alt="insta-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={youtubeIcon} alt="youtube-logo" style={{width: "25px"}}/></Button>
                    </Grid>
                </Grid>
                
                <Grid className={classes.icons} style={{position: 'fixed', bottom:'0'}}>
                    <a href="/">
                    <Button><img src={whiteHomeIcon} alt="home-logo" style={{width: "25px", marginBottom: '10px'}}/></Button>
                    </a>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={5} className={classes.register} >
                <Grid 
                container
                justifyContent="space-between"
                alignItems='center'
                className={classes.formHeading}>
                    <Typography variant='h2' className='boldFont' style={{fontSize: '2.5rem'}}>ثبت نام</Typography>
                    <a href="/">
                    <Button className={classes.homeIcon}>
                        <img style={{width: "30px"}} src={blueHomeIcon} alt="home-icon" />
                    </Button>
                    </a>
                </Grid>
                
                  <Form />

            </Grid>
            
        </Grid>

    </Container>
    </ThemeProvider>
  )
}

export default Register