import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { Storage } from "aws-amplify";
import { validate } from "../../validation/validate";
import { createList, updateList } from "../../src/graphql/mutations";
import { onCreateList, onUpdateList } from "../../src/graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, getUploadKey } from "../../store/actions/booksAction";
import Textfield from "../textField/textField";
import UploadImage from "../HandleImages/UploadImage";
import Button from "@material-ui/core/Button";
import Btn from "../button/button";
import Alert from "../alert/alert";

import DialogActions from "@material-ui/core/DialogActions";
import { showDialogAction } from "../../store/actions/dialogAction";

function CrudForm() {
  const dispatch = useDispatch();
  const [fileToUpload, setFileToUpload] = useState();
  const [imgValidate, setImgValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [ErrMsg, setErrMsg] = useState("");
  const booksData = useSelector((state) => state.booksReducer);
  const reduxUser = useSelector((state) => state.userReducer);
  const uploadedBy = reduxUser.getUser.attributes.sub;
  const ownerName = reduxUser.getUser.attributes.name;
  const email = reduxUser.getUser.attributes.email;
  let {
    id,
    title,
    isbn,
    authorName,
    city,
    price,
    description,
    imageUrl,
    imageKey: imgkey,
  } = booksData.updateFormState ? booksData.updateFormState : "";
  const [temp, setTemp] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(
    booksData.updateFormState ? true : false
  );
  const [formSubmited, setFormSubmited] = useState(false);
  const [isUploaded, setUploaded] = useState(
    booksData.updateFormState ? true : false
  );

  useEffect(() => {
    setTemp(false);
  }, [booksData.handleUpload]);

  function getSelectedFile(fileName) {
    setFileToUpload(fileName);
    setImgValidate(false);
  }

  const imageKey = useSelector((state) => state.booksReducer?.uploadKey);
  useEffect(() => {
    dispatch(getUploadKey(imgkey));
  }, []);
  return (
    <Formik
      initialValues={{
        title: title,
        isbn: isbn,
        authorName: authorName,
        city: city,
        price: price,
        description: description,
      }}
      validationSchema={validate}
      onSubmit={async (value, onSubmitProps) => {
        setFormSubmited(true);
        if (uploadStatus && isUploaded) {
          let { title, description, isbn, authorName, price, city } = value;
          if (booksData.updateFormState) {
            try {
              setIsLoading(true);
              const result = await API.graphql(
                graphqlOperation(updateList, {
                  input: {
                    id,
                    title,
                    isbn,
                    authorName,
                    city,
                    description,
                    price,
                    imageKey,
                    uploadedBy,
                    ownerName,
                  },
                })
              );
              if (result) {
                setMsg("Book updated successfully");
                setImgValidate(false);
                onSubmitProps.resetForm();
                dispatch(getBooks({ formState: false }));
                setIsLoading(false);

                dispatch(
                  showDialogAction({
                    open: true,
                    message: "Book Updated Successfully",
                  })
                );
              }
            } catch (e) {
              setIsLoading(false);
              setErrMsg(e.message);
            }
          } else {
            setIsLoading(true);
            try {
              const result = await API.graphql(
                graphqlOperation(createList, {
                  input: {
                    title,
                    isbn,
                    authorName,
                    city,
                    description,
                    price,
                    imageKey,
                    uploadedBy,
                    ownerName,
                    email,
                  },
                })
              );
              if (result) {
                setMsg("Book added successfully");
                setImgValidate(false);
                onSubmitProps.resetForm();
                dispatch(getBooks({ formState: false }));
                setIsLoading(false);
                dispatch(
                  showDialogAction({
                    open: true,
                    message:
                      "Book Added.If Some Is Interested, You Will Get Email Or Check Chat Messenger Notification.",
                  })
                );
              }
            } catch (e) {
              setIsLoading(false);
              setErrMsg(e.message);
            }
          }
        }
      }}
    >
      <Form>
        <Textfield label="Title" name="title" type="text" />
        <Textfield label="ISBN" name="isbn" type="text" />
        <Textfield label="Author Name" name="authorName" type="text" />
        <Textfield label="Your Location City?" name="city" type="text" />
        <Textfield label="Price" name="price" type="Number" />
        <Textfield label="Message To Buyer" name="description" type="text" />
        <UploadImage
          getSelectedFile={getSelectedFile}
          updateImg={imageUrl}
          setUploadStatus={setUploadStatus}
          setUploaded={setUploaded}
          setFormSubmited={setFormSubmited}
        />
        {(!uploadStatus || !isUploaded) && formSubmited ? (
          <p style={{ color: "red", fontSize: ".8rem", marginTop: 10 }}>
            {!uploadStatus
              ? "Please upload an image"
              : "Please click on upload button first"}
          </p>
        ) : null}
        <DialogActions>
          <Button
            onClick={() => dispatch(getBooks({ formState: false }))}
            color="primary"
          >
            Cancel
          </Button>
          {booksData.updateFormState ? (
            <Btn name="Update" type="submit" isLoading={isLoading} />
          ) : (
            <Btn name="Submit" type="submit" isLoading={isLoading} />
          )}
        </DialogActions>
        {msg || ErrMsg ? <Alert message={msg} errMessage={ErrMsg} /> : ""}
      </Form>
    </Formik>
  );
}

export default CrudForm;
