import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const FilterModal = ({showPopup,handleClose}) => {

  useEffect(() => {
    //TODO
  }, []);

  return (
    <Modal
      id="businessFilteModal"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable content-modal"
      show={showPopup}
      onHide={() => handleClose(false)}
      backdrop="static"
    >
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Filter</h5>
            <button type="button" className="btn-close" onClick={() => handleClose()} />
        </div>
        <div className="modal-body text-dark">
            This is a Bootstrap modal in React.
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => handleClose()}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </Modal>
  );
};

export default FilterModal;
