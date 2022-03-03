import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Loader from "../loader/loader";
const useStyles = makeStyles((theme) => ({
  btnResponsive: {
    backgroundColor: "#e35309",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#d45b1d",
      color: "#fff",
    },
    marginRight: "15px !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderBottom: "1px solid gray",
      borderRadius: 0,
      backgroundColor: "#fff",
      color: "#000",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  btn: {
    backgroundColor: "#e35309",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#d45b1d",
      color: "#fff",
    },
    marginRight: "15px !important",
  },
}));

export default function ContainedButtons({
  name,
  logout,
  size,
  type,
  width,
  del,
  updatefun,
  isLoading,
  mobileMenu,
  fetchUsers,
  disabled,
}) {
  const classes = useStyles();
  return (
    <Button
      disabled={disabled}
      variant='contained'
      className={
        name === "home" ||
        name === "message" ||
        name === "contact" ||
        name === "logout"
          ? classes.btnResponsive
          : classes.btn
      }
      size={size}
      onClick={
        logout
          ? logout
          : updatefun
          ? updatefun
          : mobileMenu
          ? mobileMenu
          : fetchUsers
          ? fetchUsers
          : del
      }
      type={type}
      fullWidth={width}
    >
      {name === "deleteBtn" ? (
        <DeleteIcon />
      ) : name === "updateBtn" ? (
        <EditIcon />
      ) : isLoading === true ? (
        <Loader
          height='20'
          width='20'
          color={name == "Submit" || name == "Update" ? "#fff" : "#e35309"}
        />
      ) : (
        name
      )}
    </Button>
  );
}
