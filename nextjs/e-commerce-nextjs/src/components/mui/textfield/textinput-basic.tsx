import React, {FC} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface BasicTextFieldsProps {
  value: string;
  label: string;
  variant: 'outlined' | 'filled' | 'standard';
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BasicTextFields: FC<BasicTextFieldsProps> = ({ value, label, variant, id, onChange }) => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} label={label} variant={variant} value={value} onChange={onChange} />
    </Box>
  );
};

export default BasicTextFields;

