import { useState, useEffect } from 'react'
import dataService from '../services/data'
import NoteCard from '../components/NoteCard'
import AppNavbar from '../components/AppNavbar'
import TextEditor from '../components/TextEditor'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const HomePage = ({entries, addEntry, showModal, handleCloseModal}) => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
        <style type="text/css">
        {`
        .modal-dialog {
         width: 20rem;
         height: 1%;
        }
        `}
        </style>
        <NoteCard entries={entries}/>
        <Modal
        show={showModal}
        onHide={handleCloseModal}
        keyboard={false}
        centered={true}
      >
        {/* <Modal.Header closeButton> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        {/* </Modal.Header> */}
        {/* <Modal.Body> */}
        <TextEditor addEntry={addEntry} handleCloseModal={handleCloseModal}/>
        {/* </Modal.Body> */}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>     
        
        </>
    )
}

export default HomePage