import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    background: "#141A46",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  wrapper: {
    padding: "100px 275px",
    display: "flex",
    justifyContent: "space-between",
  },
  socialWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& p": { color: "white", margin: "22px 0px 35px" },
  },
  mainLogo: {
    marginLeft: "-20px !important",
  },
  socialIcons: {
    display: "flex",
    width: "100%",
    maxWidth: "70px",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: "20px",
  },
  linksWrapper: {
    "& h4": {
      color: "white",
      marginBottom: "31px",
    },
    "& p": {
      color: "white",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    marginBottom: "17px",
    "& svg": {
      marginRight: "8px",
    },
  },
}));
