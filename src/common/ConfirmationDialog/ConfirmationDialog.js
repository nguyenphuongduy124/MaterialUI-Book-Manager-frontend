import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialog(props) {
  const { open, setOpen, setIsDelete, currentProduct } = props;

  const handleCancle = () => {
    setIsDelete(false);
    setOpen(false);
  };
  const handleDelete = () => {
    setIsDelete(true);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Bạn có chắc chắn muốn xoá ?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {currentProduct ? currentProduct.name : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDelete}
            color="secondary"
            variant="contained"
          >
            Delete
          </Button>
          <Button
            onClick={handleCancle}
            color="primary"
            autoFocus
            variant="contained"
          >
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
