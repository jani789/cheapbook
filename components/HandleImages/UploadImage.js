import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useS3 } from "../../hooks/useS3";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/uploadImage.module.css";
import Loader from "../loader/loader";
import {
  getUploadKey,
  handleUploadError,
} from "../../store/actions/booksAction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  imgSize: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: "#e35309",
    marginTop: "1em",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#e35309",
    },
  },
}));
function UploadImage({
  getSelectedFile,
  updateImg,
  setUploadStatus,
  setUploaded,
  setFormSubmited,
}) {
  const classes = useStyles();
  const booksData = useSelector((state) => state.booksReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [imgValidate, setImgValidate] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [image, setImage] = useState(
    "https://react.semantic-ui.com/images/wireframe/image.png"
  );
  let fileInput = document.getElementById("fileToUpload");
  let fileToUpload = fileInput?.files[0];
  const HandleInputChange = async (e) => {
    let { imageUrl } = booksData.updateFormState
      ? booksData.updateFormState
      : "";
    const [uploadToS3] = useS3();

    if (!fileToUpload) return;
    setIsLoading(true);
    const imageKey = await uploadToS3(fileToUpload);
    if (imageKey) {
      setIsLoading(false);
      setUploaded(true);
      dispatch(handleUploadError(true));
      setDisableBtn(false);
    }

    dispatch(getUploadKey(imageKey));
    if (!imageKey && !imageUrl) {
      setImgValidate(true);
      setIsLoading(true);
      return;
    }
    getSelectedFile(fileToUpload);
  };
  const previewImage = async (e) => {
    setUploadStatus(true);
    setFormSubmited(false);
    const fileSampleUrl = await URL?.createObjectURL(e?.target?.files[0]);
    setImage(fileSampleUrl);
    setDisableBtn(true);
  };
  return (
    <>
      <h3>Upload Image</h3>
      <form className={styles.form}>
        <label htmlFor='fileToUpload' style={{ display: "inline-block" }}>
          <div
            className={styles.profile_pic}
            id='profilePic'
            style={{
              backgroundImage: `url( ${
                updateImg &&
                image ===
                  "https://react.semantic-ui.com/images/wireframe/image.png"
                  ? updateImg
                  : image
              } )`,
            }}
          >
            <span>Upload Image</span>
          </div>
        </label>
        <input
          type='File'
          name='fileToUpload'
          id='fileToUpload'
          ref={inputRef}
          multiple
          onChange={(e) => previewImage(e)}
        />
      </form>
      <label htmlFor='contained-button-file'>
        <Button
          onClick={HandleInputChange}
          name='Upload'
          variant='contained'
          component='span'
          className={classes.btn}
          disabled={disableBtn ? false : true}
        >
          {isLoading ? (
            <Loader height='20' width='20' color='#fff' />
          ) : (
            "Upload"
          )}
        </Button>
      </label>
    </>
  );
}

export default UploadImage;
