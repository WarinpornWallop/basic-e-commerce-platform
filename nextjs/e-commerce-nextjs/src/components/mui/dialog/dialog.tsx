import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  onฺฺButtonOne?: () => void;
  onฺฺButtonTwo?: () => void;
  title?: string;
  description?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  onClose,
  onฺฺButtonOne,
  onฺฺButtonTwo,
  title = "Use Google's location service?",
  description = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { onฺฺButtonOne?.(); onClose(); }}>Disagree</Button>
        <Button onClick={() => { onฺฺButtonTwo?.(); onClose(); }} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;