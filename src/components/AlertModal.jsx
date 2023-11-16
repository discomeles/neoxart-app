import Modal from 'react-bootstrap/Modal';

const AlertModal = ({showAlertModal, alertModalText}) => {
    return (
        <>
        <style type="text/css">
        {`
        .modal-dialog {
         width: 20rem;
        }
        `}
        </style>
        <Modal
        show={showAlertModal}
        centered={true}
        >
        <Modal.Body style={{whiteSpace: "pre-wrap", textAlign: "center"}}>
        
        <div>
        <h5>
        {alertModalText}
        </h5>
        </div>
        
        </Modal.Body>
      </Modal>
      </>
    )
}

export default AlertModal