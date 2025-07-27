import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export interface CustomSnackbarProps extends SnackbarOrigin {
  open: boolean;
  message?: string;
  autoHideDuration?: number;
  onClose?: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  message = "I love snacks",
  vertical = "top",
  horizontal = "center",
  autoHideDuration = 3000,
  onClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={autoHideDuration}
      key={vertical + horizontal}
    />
  );
};

export default CustomSnackbar;