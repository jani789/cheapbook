import React from "react";
import { ErrorMessage, useField } from "formik";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const Textfield = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}></label>
      <FormControl fullWidth>
        <TextField
          className={`${meta.touched && meta.error && "is-invalid"}`}
          label={label}
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          {...field}
          {...props}
        />
        <ErrorMessage
          component='div'
          name={field.name}
          style={{
            color: "red",
            fontSize: ".8rem",
          }}
        />
      </FormControl>
    </div>
  );
};
export default Textfield;
