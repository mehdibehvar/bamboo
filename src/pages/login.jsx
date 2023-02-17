import styled from "@emotion/styled";
import { Box, Container, Grid } from "@mui/material";
import {BsWhatsapp} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineYoutube} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import backImage from "../assets/images/pexels-picjumbocom-461077.png";
import { HomeIcon } from "../components/common/button/icons";
import bambooIcon from "../assets/images/bamboo.png"
import LoginForm from "../components/loginform/LoginForm";
const style = {
  backgroundImage: `url(${backImage})`,
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  flexDirection:"column"
};
const BlurDiv = styled(Box)(({ theme }) => (props) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#004458",
  position: "absolute",
  opacity: "80%",
}));
const LoginCenter = styled(Box)(({ theme }) => (props) => ({
  width: "100%",
  height: "100%",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
zIndex:1,
color:"#FFFFFF",
fontFamily:"lalezar",
fontSize:'40px',
"div.title":{
display:"flex",
alignItems:"center",
gap:10
},
"span.bamboo":{
  backgroundImage:`url(${bambooIcon})`,
  width:50,
  height:50,
  backgroundSize:'cover'
},

"div.icons":{
  borderTop:"5px solid #DBDBDB",
  display:"flex",
  gap:"100px",
  paddingTop:35,
  marginTop:46
}

}));
const HomeIconWrapper = styled(Box)(({ theme }) => (props) => ({
  width: "100%",
display:"flex",
alignItems:"center",
justifyContent:"center",zIndex:1

}));
const Login = () => {
  return (
    <Container maxWidth="xxl">
      <Grid container>
        <Grid item md={7}>
          <Box sx={style}>
            <BlurDiv />
       <LoginCenter>

              <div className="title">
            <h2>آکادمی آموزشی بامبو</h2>   <span className="bamboo"></span>
              </div>
              <div className="icons">
              <span><BsWhatsapp/></span>
            <span><TbBrandTelegram/></span>
            <span><AiOutlineYoutube/></span>
            <span><AiOutlineInstagram/></span>
              </div>
       
       </LoginCenter>
          <HomeIconWrapper>
<NavLink to="/">

              <HomeIcon />
</NavLink>
          </HomeIconWrapper>
           
          </Box>
        </Grid>
        <Grid item md={5}>
          <LoginForm/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
