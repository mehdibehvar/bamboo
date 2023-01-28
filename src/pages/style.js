import { colors } from '@material-ui/core';
import { makeStyles } from  '@material-ui/core/styles';
const mainBlueColor = "#004458";

const useStyles = makeStyles((theme) => ({
    
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        color: mainBlueColor
    },
    formHeading:{
        paddingBottom: "1em",
        color: mainBlueColor
    },
    register:{
        padding: "3em 6em",
        width: "30%"
    },
    input: {
        padding: ".9em 1em",
        border: "none",
        textAlign: "right",
        direction: "rtl"
    },
    btnHolder: {
        width: "100%"
    },
    btn:{
        width: "20%"
    },
    registerBtn:{
        background: mainBlueColor,
        color: 'white',
        marginRight: "20px",
        whiteSpace: "nowrap",
        minWidth: "max-content"
    },
    loginBtn: {
        color: mainBlueColor,
        background: "transparent",
        border: "none"
    },
    
    titleAndLogo: {
        color: "white",
        borderBottom: "2px solid #DBDBDB",
        padding: "1.5em 0"
    },
    icons: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    poster: {
        /*marginBottom: '30%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '15%'
            
        }*/
    },
    posterContainer: {
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            height: '40vh'
        }
    }
}))

export default useStyles;