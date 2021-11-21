import React from 'react';
import { Refresh, TrendingFlat } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';


export default function WinModal({open, handleClose, textModal, setPlayer, setBox, setPlayerWin, setStarting}) {

  const handleRefresh = () => {
    setPlayer(1)
    setBox([null, null, null, null, null, null, null, null, null])
    setStarting(false)
    setPlayerWin([0, 0])
    handleClose()
  }

  const handleContinue = () => {
    setPlayer(1)
    setBox([null, null, null, null, null, null, null, null, null])
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
              <Tooltip title="Refresh">
                <button className="modal-btn"
                  onClick={handleRefresh}
                >
                  <Refresh style={{fontSize: '30px'}}/>
                </button>
              </Tooltip>
              <Tooltip title="continue">
                <button className="modal-btn"
                  onClick={handleContinue}
                >
                  <TrendingFlat style={{fontSize: '30px'}}/>
                </button>
              </Tooltip>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
