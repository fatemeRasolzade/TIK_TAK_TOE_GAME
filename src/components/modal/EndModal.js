import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 3),
  },
}));

export default function EndModal({open, handleClose, textModal, setPlayer, setBox, setPlayerWin, setStarting}) {

  const classes = useStyles();

  const handleRefresh = () => {
    setPlayer(1)
    setBox([null, null, null, null, null, null, null, null, null])
    setPlayerWin([0, 0])
    setStarting(false)
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
        >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4 id="transition-modal-title">{textModal}</h4>
            <div className="d-flex justify-content-around mt-4">
              <Tooltip title="OK">
                <button className="modal-btn"
                    onClick={handleRefresh}
                >
                  OK
                </button>
              </Tooltip>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}