import React from 'react';
import { Tooltip } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';


export default function EndModal({open, handleClose, textModal, setPlayer, setBox, setPlayerWin, setStarting}) {

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
        className="modal-style"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
        >
        <Fade in={open}>
          <div className="modal-paper">
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