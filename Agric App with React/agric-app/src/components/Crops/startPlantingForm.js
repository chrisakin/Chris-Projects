import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './crops.css';

const StartPlantingForm = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Crop Input Form
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select seed quantity</Form.Label>
                        <Form.Control as="select">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Land Size</Form.Label>
                        <Form.Control as="select">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/track-plant">
                    <button className="btn text-white start-btn">
                        Proceed
                    </button>
                </Link>
            </Modal.Footer>
        </Modal>
        );
    }

export default StartPlantingForm;