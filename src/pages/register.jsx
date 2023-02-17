import React from 'react'
import { createTheme } from '@mui/material/styles';
import '../components/Form/textfield.css';
import Poster from '../components/poster/Poster'
import { styled } from '@mui/system';
import blueHomeIcon from '../assets/home.svg';
import Form from '../components/Form/Form';
import { Typography, Button, Grid, Container, ThemeProvider } from '@mui/material';
const Register = () => {
  const theme = createTheme({
    typography: {
        fontFamily: 'Yekan'
    }
    
});
   
  
  
  const Register = styled(Grid)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        padding: "3em 5em"
    }
  }))
  const HomeIcon = styled(Button)(({theme}) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }))


  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl" style={{ height: '100vh', margin:'0', padding: '0' }}>
        <Grid container direction='row-reverse' justifyContent="space-between">
          <Poster/>
          <Register item xs={12} md={6} lg={5} className='register' >
                <Grid container justifyContent="space-between" alignItems='center' className='formHeading'>
                    <Typography variant='h2' className='boldFont' style={{fontSize: '2.5rem'}}>ثبت نام</Typography>
                    <a href="/">
                    <HomeIcon className='homeIcon'>
                        <img style={{width: "30px"}} src={blueHomeIcon} alt="home-icon" />
                    </HomeIcon>
                    </a>
                </Grid>
                <Form />
          </Register>
        </Grid>
    </Container>
    </ThemeProvider>
  )
}

export default Register