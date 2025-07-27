import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { idea } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface ValidationTextFieldsProps {
  value: string;
  label: string;
  variant: "outlined" | "filled" | "standard";
  id?: string;
  inputError?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ValidationTextFields: FC<ValidationTextFieldsProps> = ({
  value,
  label,
  variant,
  id,
  inputError,
  onChange,
}) => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          helperText={inputError}
          variant={variant}
        />
      </div>
    </Box>
  );
};
export default ValidationTextFields;
