import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import LoginTab from "../Login-PopUp/mdb-login"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import log from '../logger.service'
=======
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874

const useStyles = makeStyles((theme) => ({
    dialog:{
      
    }
}))
export default function FormDialog() {
<<<<<<< HEAD
  const classes = useStyles();  
=======
    const classes = useStyles();
    
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOpen = () => {
<<<<<<< HEAD
    log('user clicked on login')
=======
>>>>>>> 2018e7828f78f03a8f5afb1d824a1b5bcde16874
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen} style={{marginLeft:'9px'}}>
        Login
      </Button>
      <Dialog
      className={classes.dialog} 
      open={open} 
      fullScreen={fullScreen}
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
      >
      
           
       {fullScreen === true ?  <IconButton> <CloseIcon onClick={handleClose} /> </IconButton> : "" } 
       <LoginTab close={handleClose}/>
      
      </Dialog>
    </div>
  );
}
