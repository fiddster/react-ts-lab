import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { PartybarContext } from '../../../components/PartyBar/PartyBarContext';

export const AddCreatureForm = () => {

    const PartyMembers = useContext(PartybarContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="btn" onClick={handleShow}>
                Add Creature
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="btn" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="btn" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
