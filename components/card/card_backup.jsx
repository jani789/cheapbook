import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { getUsersChats } from "../../store/actions/chatsAction";
import { makeStyles } from "@material-ui/core/styles";
import { deleteList } from "../../src/graphql/mutations";
import { getBooks } from "../../store/actions/booksAction";
import { Storage } from "aws-amplify";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Loader from "../loader/loader";
import Image from "next/image";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    boxShadow: "0 0 10px grey",
    textTransform: "capitalize",
    padding:"0pxs",
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
      maxWidth: 250,
    },
  },
  media: {
    height: 180,
    width: "100%",
  },
  color: {
    color: "#e35309",
  },
  loaderImg: {
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://react.semantic-ui.com/images/wireframe/image.png')",
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  cardActions:{
    padding:"0px 8px 8px 8px"
  },
  btn: {
    backgroundColor: "#e35309",
    width: "100%",
    fontSize: "16px",
    padding: "4px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#d45b1d",
      color: "#fff",
    },
  },
  title: {
    width: "180px",
    overflow: "hidden",
    fontSize: "16px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    marginBottom: "0px",
    textOverflow: "ellipsis;",
  },
  authorName: {
    whiteSpace: "nowrap",
    width: "180px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "12px",
  },
  link: {
    color: "#fff",
  },
  price: {
    color: "#248f24",
    fontSize: "17px",
    fontWeight: "bold",
  },
}));

export default function BookCard({ books }) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const {
    id,
    title,
    price,
    imageKey,
    owner,
    authorName,
    imageUrl,
    ownerName,
    email,
  } = books;
  const reduxUser = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  async function deleteBook(id) {
    await API.graphql(graphqlOperation(deleteList, { input: { id } }))
      .then(() => {
        Storage.remove(imageKey)
          .then(() => {})
          .catch((err) => {});
      })
      .catch((err) => {});
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
    >
      <MenuItem
        onClick={() => {
          deleteBook(id);
          handleMobileMenuClose();
        }}
      >
        Delete
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch(
            getBooks({
              updateFormState: { ...books, imageUrl: imageUrl },
              formState: true,
            })
          );
          handleMobileMenuClose();
        }}
      >
        Update
      </MenuItem>
    </Menu>
  );
  function fetchUsers() {
    dispatch(
      getUsersChats({
        currentRecieverName: ownerName,
        currentRecieverId: owner,
        currentRecieverEmail: email,
        isLoading: true,
      })
    );
  }

  const titleToSlug = ()=>{
    return title?.toString().toLowerCase().replace(/ /g, '-')
  }

  return (
    <Card className={classes.root}>
      <Link
        href={{
          // pathname: `/bookDetails`,
          // query: { ...books, imgUrl: imageUrl },
          pathname:`/bookDetails/${titleToSlug()}/${id}`
        }}
        passHref
      >
        <CardActionArea>
          {!imageUrl ? (
            <div className={classes.loaderImg}>
              <Loader color='#e35309' width='30' height='30' />
            </div>
          ) : (
            <Image src={imageUrl} alt={title} width={300} height={300} />
          )}
        </CardActionArea>
      </Link>
      <CardContent style={{ padding: "5px 10px" }}>
        <Typography gutterBottom className={classes.title}>
          {title}
        </Typography>
        <Typography 
        //gutterBottom 
        variant='body2' className={classes.authorName}>
          By: {authorName}
        </Typography>
        <Typography
          //gutterBottom
          variant='body2'
          color='textSecondary'
          className={classes.price}
        >
          ${price ? price.toFixed(2) : "N/A"}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {reduxUser?.getUser?.username !== owner ? (
          <Link
            style={{ color: "#fff" }}
            href={{
              pathname: reduxUser.loginStatus ? `/chat/[index]` : "/auth/login",
              query: books,
            }}
            as={reduxUser.loginStatus ? "/chat/index" : ""}
            passHref
          >
            <Button className={classes.btn} onClick={fetchUsers}>
           {/* <Button className={classes.root} onClick={fetchUsers}> */}
            
              Live Chat
              {/* Contact Seller */}
            </Button>
          </Link>
        ) : null}
        {reduxUser.loginStatus === false ||
        reduxUser.getUser.username !== owner ? null : (
          <div>
            <Button className={classes.btn} onClick={handleMobileMenuOpen}>
              Actions
            </Button>
          </div>
        )}
      </CardActions>
      {renderMobileMenu}
    </Card>
  );
}
