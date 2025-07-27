import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export interface SelectTextFieldsProps {
  value?: string;
  label?: string;
  variant?: "outlined" | "filled" | "standard";
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  select?: boolean;
  helperText?: string;
  options?: { value: string; label: string }[];
  native?: boolean;
}

const SelectTextFields: React.FC<SelectTextFieldsProps> = ({
  value,
  label,
  variant = "outlined",
  id,
  onChange,
  select = false,
  helperText,
  options,
  native = false,
}) => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        select={select}
        helperText={helperText}
        slotProps={native ? { select: { native: true } } : undefined}
      >
        {select && options && !native &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        {select && options && native &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </TextField>
    </Box>
  );
};

export default SelectTextFields;