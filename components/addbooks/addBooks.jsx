import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getBooks } from "../../store/actions/booksAction";
import Link from "next/link";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  },
  color: {
    backgroundColor: "#e35309",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#e35309",
    },
  },
}));

export default function FloatingActionButtons({ showModal }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.userReducer);
  return (
    <div className={classes.root}>
      {!reduxUser.loginStatus ? (
        <Link href='/auth/login' passHref>
          <Fab aria-label='like' className={classes.color}>
            <AddIcon />
          </Fab>
        </Link>
      ) : (
        <Fab
          aria-label='like'
          className={classes.color}
          onClick={() =>
            dispatch(getBooks({ formState: true, updateFormState: null }))
          }
        >
          <AddIcon />
        </Fab>
      )}
    </div>
  );
}
