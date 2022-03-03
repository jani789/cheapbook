import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddBookBtn from "../addbooks/addBooks";
import CrudForm from "../form/form";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../store/actions/booksAction";
export default function FormDialog() {
  const formState = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <AddBookBtn />
      <Dialog
        open={formState.formState}
        onClose={() => dispatch(getBooks({ formState: false }))}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {formState.updateFormState ? "Edit Book Details" : "SELL YOUR BOOK"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            UPLOAD THE BOOK DETAILS TO SELL. 
            THIS WILL HELP BUYER WHEN SEARCHING FOR BOOKS
          </DialogContentText>
          <CrudForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
