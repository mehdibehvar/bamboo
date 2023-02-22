
import { Typography, Button, Grid } from '@mui/material'


import '../Form/textfield.css';
import { styled } from '@mui/system';

import bgImg from '../../assets/bg.svg';

import bambooLogo from '../../assets/bamboo.svg';
import instaIcon from '../../assets/insta.svg';
import teleIcon from '../../assets/tele.svg';
import youtubeIcon from '../../assets/yout.svg';
import whatsAppIcon from '../../assets/wha.svg';
import whiteHomeIcon from '../../assets/home12.svg';


const PosterSection=()=> {
    
    const PosterConainer = styled(Grid)(({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            height: '45vh'
        }
    }))
    const Poster = styled(Grid)(({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            marginTop: '-25px'
        }
    }))
    const TitleAndLogo = styled(Grid)(({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection:'column-reverse',
            justifyContent:'center',
            alignItems:'center'
        }
    }))
    const Icons = styled(Grid)(({theme}) => ({
        
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }))






  return (
    <PosterConainer item xs={12} md={6} lg={7} className='posterContainer' style={{backgroundImage : `url(${bgImg})`}}>
                <Poster>
                    <TitleAndLogo container justifyContent="space-between" alignItems='center' sx={{height:{xs: "100px"}}} className='titleAndLogo'>
                        <Typography variant='h4' className='boldFont'>آکادمی آموزشی بامبو</Typography>
                        <img src={bambooLogo} alt="bamboo-logo" />
                    </TitleAndLogo>
                    
                    <Icons container direction='row' justifyContent="space-between" alignItems='center' style={{marginTop: "30px"}} >
                        <Button><img src={whatsAppIcon} alt="whatsapp-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={teleIcon} alt="telegram-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={instaIcon} alt="insta-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={youtubeIcon} alt="youtube-logo" style={{width: "25px"}}/></Button>
                    </Icons>
                </Poster>
                
                <Icons style={{position: 'fixed', bottom:'0'}}>
                    <a href="/">
                    <Button><img src={whiteHomeIcon} alt="home-logo" style={{width: "25px", marginBottom: '10px'}}/></Button>
                    </a>
                </Icons>
    </PosterConainer>
  )
}

export default PosterSection