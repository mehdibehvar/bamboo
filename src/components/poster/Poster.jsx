
import { Typography, Button, Grid, Box } from '@mui/material'


import '../Form/textfield.scss';
import { styled } from '@mui/system';

import bgImg from '../../assets/registerbg.png';

import bambooLogo from '../../assets/bamboo.svg';
import instaIcon from '../../assets/insta.svg';
import teleIcon from '../../assets/tele.svg';
import youtubeIcon from '../../assets/yout.svg';
import whatsAppIcon from '../../assets/wha.svg';
import { AiOutlineHome } from 'react-icons/ai';


const PosterSection=()=> {
    
    const PosterConainer = styled(Grid)(({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            height: '45vh'
        },
        position:"relative",
   
    }))
    const Poster = styled(Grid)(({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            marginTop: '-25px',
            
        },
        position:"absolute",
        zIndex:2
    }))
    const TitleAndLogo = styled(Grid)(({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection:'column-reverse',
            justifyContent:'center',
            alignItems:'center'
        },
  
    }))
    const Icons = styled(Grid)(({theme}) => ({
        zIndex:2,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }))
    const BlueCover = styled(Box)(({theme}) => ({
        width: "100%",
        height: "100%",
        backgroundColor: "#004458",
        position: "absolute",
        opacity: "80%"
    
    }))






  return (
    <PosterConainer item xs={12} md={6} lg={7} className='posterContainer' style={{backgroundImage : `url(${bgImg})`}}>
                <Poster>
                    <TitleAndLogo container justifyContent="space-between" alignItems='center' sx={{height:{xs: "100px"}}} className='titleAndLogo'>
                        <Typography variant='h4' className='boldFont'>آکادمی آموزشی بامبو</Typography>
                        <img src={bambooLogo} alt="bamboo-logo" />
                    </TitleAndLogo>
                    
                    <Icons container direction='row' justifyContent="center" alignItems='center' style={{marginTop: "30px",position:"absolute"}} >
                        <Button><img src={whatsAppIcon} alt="whatsapp-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={teleIcon} alt="telegram-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={instaIcon} alt="insta-logo" style={{width: "25px"}}/></Button>
                        <Button><img src={youtubeIcon} alt="youtube-logo" style={{width: "25px"}}/></Button>
                    </Icons>
                </Poster>
                
                <Icons style={{position: 'absolute', bottom:'0'}}>
                    <a href="/">
                 <AiOutlineHome size={50} color="white"/>
                    </a>
                </Icons>
                <BlueCover/>
    </PosterConainer>
  )
}

export default PosterSection