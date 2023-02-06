import { makeStyles } from  '@material-ui/core/styles';
const mainBlueColor = "#004458";


const useStyles = makeStyles((theme) => ({
    direction : 'rtl',
    helperText:{
        marginLeft: 'auto'
    },

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
        width: "30%",
        minHeight: "fit-content",
        [theme.breakpoints.down('sm')]: {
            padding: "3em 5em"
        }
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
        height: "50px",
        width: "20%",
        boxShadow: "none",
        border: 'none',
        borderRadius: '0',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    registerBtn:{
        background: mainBlueColor,
        color: 'white',
        marginRight: "20px",
        whiteSpace: "nowrap",
        minWidth: "max-content",
        [theme.breakpoints.down('sm')]: {
            marginRight: '0',
            marginBottom: '15px'
        },
        '&:hover' : {
            color: mainBlueColor
        }
    },
    loginBtn: {
        color: mainBlueColor,
        background: "transparent",
        border: "none"
    },
    
    titleAndLogo: {
        color: "white",
        borderBottom: "2px solid #DBDBDB",
        padding: "1.5em 0",
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection:'column-reverse',
            justifyContent:'center',
            alignItems:'center'
        }
    },
    icons: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    homeIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    poster: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '-25px'
            
        }
    },
    posterContainer: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
        [theme.breakpoints.down('sm')]: {
            height: '45vh'
        }
    }
}))

export default useStyles;