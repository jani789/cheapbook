import favicon from "../../assets/favicon.png";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/actions/usersAction";
import { setPageAction } from "../../store/actions/pageAction";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Btn from "../button/button";
import Search from "../search/search";
import Image from "next/image";
import { TO_HOME_PAGE } from "../constants";
import { Box, Button } from "@material-ui/core";
import {getBooks} from "../../store/actions/booksAction"

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
  },
  paper: {
    top: "45px !important",
  },
  grow: {
    flexGrow: 1,
    backgroundColor: "#cccccc",
  },
  root: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      minHeight: "auto",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "#FFFFFF",
  },
  logo: {
    alignItems: "center",
    width: 200,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: 120,
    },
    [theme.breakpoints.down("md")]: {
      width: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: 120,
    },
  },
  signupBtn: {
    color: "#fff",
    "&:hover": {
      color: "#e35309",
    },
    textDecoration: "none",
   // width: "100%",
    marginRight: "10px !important",
    padding: "10px 20px",
    borderRadius: 5,
    transition: 0.5,
   // textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px !important",
      color: "#000",
      backgroundColor: "#fff",
    },
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: "#e35309",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#d45b1d",
      color: "#fff",
    },
    textDecoration: "none",
    width: "100%",
    marginRight: "10px !important",
    padding: "10px 20px",
    borderRadius: 5,
    transition: 0.5,
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px !important",
      color: "#000",
      backgroundColor: "#fff",
    },
  },
  gridHide: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  gridHideMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  subheader:{
    
    height:"40px",
    marginTop:"5px",
  }
}));

export default function PrimarySearchAppBar({page,setPage}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const reduxUser = useSelector((state) => state.userReducer);
  const booksData = useSelector((state) => state.booksReducer.getBooks);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { index } = router.query;
 
  const path = router.pathname

  console.log(path);
 
  const pageData = useSelector((state) => state.pageReducer);
 
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

    const sellButtonHandler= ( )=>{
     if(!reduxUser.loginStatus){
      router.push("/auth/login")
     }else{
      dispatch(getBooks({ formState: true, updateFormState: null }))

     }
    }


  const handleLogoClick=()=>{
    console.log("hello");
    if (router.pathname === TO_HOME_PAGE && pageData.page !== 1)
    {
      
      // console.log("yyyypathname",router.pathname, "homepage",TO_HOME_PAGE,"pagenumber", pageData.page)
      dispatch(setPageAction({ page: 1 }));
      setPage(1)
   
    } 
    else {
// console.log("nnnpathname",router.pathname, "homepage",TO_HOME_PAGE,"pagenumber", pageData.page)

      router.push(TO_HOME_PAGE)

    }
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  async function logout() {
    try {
      await Auth.signOut();
      dispatch(getUser({ getUser: null, loginStatus: false }));
      history.push("/login");
    } catch (err) {
      return;
    }
  }
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      classes={{ list: classes.root, paper: classes.paper }}
    >
      {reduxUser.loginStatus === false ? (
        <div>
          <MenuItem classes={{ root: classes.root }}>
            <Link href='/auth/login'>
              <a className={classes.btn}>Login</a>
            </Link>
          </MenuItem>
          <MenuItem classes={{ root: classes.root }}>
            <Link href='/auth/signup'>
              <a className={classes.btn}>Sign up</a>
            </Link>
          </MenuItem>
        </div>
      ) : (
        <div>
          {router.asPath === `/chat/${index}` ? (
            <MenuItem classes={{ root: classes.root }}>
              <Link href='/' passHref>
                <a className={classes.btn}>Home</a>
              </Link>
            </MenuItem>
          ) : (
            <div>
              <MenuItem classes={{ root: classes.root }}>
                <Link href='/chat/[index]' as='/chat/index' passHref>
                  <a className={classes.btn}>Message</a>
                </Link>
              </MenuItem>
            </div>
          )}
          <MenuItem classes={{ root: classes.root }}>
            <a className={classes.btn} onClick={logout}>
              Logout
            </a>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div>
      <div className={classes.grow}>
      <AppBar
        position='static'
        style={{ backgroundColor: "#141A46", padding: 30, color: "#000" }}
      >
        <Grid
          container
          spacing={1}
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid md={2} sm={11} xs={11} lg={3}>
            {/* <Link href='/' passHref> */}
            <Box onClick={handleLogoClick}>
              <Image
                src={favicon}
                className={classes.logo}
                alt='cheapbookdeals.com'
                width={350}
                height={70}
              />
              </Box>
            {/* </Link> */}
          </Grid>
          <Grid md={2} sm={1} xs={1} lg={3} className={classes.gridHideMobile}>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Grid>
        
          <Grid md={5} sm={12} xs={12} lg={5} >
          {/* <Box onClick={handleLogoClick}>
              <Image
                src={favicon}
                className={classes.logo}
                alt='cheapbookdeals.com'
                width={250}
                height={60}
              />
              </Box> */}
            {router.pathname === "/bookDetails" ||
            router.pathname === "/chat" ||
            router.asPath === `/chat/${index}` ? null : (
              <><Search booksData={booksData}   /> </>
            )}
          </Grid>
          
          <Grid md={4} sm={3} xs={2} lg={4} className={classes.gridHide}>
            <Toolbar>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                {reduxUser.loginStatus === false ? (
                  <>
                    <Link href='/auth/login'>
                      <a className={classes.btn}>Login</a>
                    </Link>
                    <Link href='/auth/signup'>
                      <a className={classes.btn}>Signup</a>
                    </Link>
                  </>
                ) : (
                  <>
                    {router.pathname === "/chat" ||
                    router.asPath === `/chat/${index}` ? (
                      <Link href='/' passHref>
                        <a className={classes.a}>
                          <Btn name='home' />
                        </a>
                      </Link>
                    ) : (
                      <>
                        <Link href='/chat/[index]' as='/chat/index' passHref>
                          <a className={classes.a}>
                            <Btn name='message' />
                          </a>
                        </Link>
                      </>
                    )}
                    <Btn name='logout' logout={logout} />
                  </>
                )}
              </div>
             
            </Toolbar>
          </Grid>
        </Grid>
        
      </AppBar>
     
      {renderMobileMenu}
    </div>
    <marquee width="60%" direction="left">
    🔥Get FREE $10 Gift Card🎁 or FREE Pizza🍕 When You Upload Books.Hurry 🚀 Limited Time Offer! See Offer Details. Upload Now​💰​😍​!!!
    </marquee> 
   {path ==="/auth/login" || path==="/auth/signup" ?"": (
       <div className={classes.subheader}>
         <p style={{textAlign:"center"}}>

           <span style={{marginRight:"1rem",fontSize:"1rem", color:"green"}}> 
           💰💲<b><i>Sell TextBooks/Books to People Near You </i></b> <span style={{fontSize:"1rem"}}>🤑👉
           </span>
           </span>
           <Button variant="contained"  color="secondary"
         onClick={sellButtonHandler}
        >Sell</Button>
         </p>               
      </div>
   )} 
    </div>
  );
}
