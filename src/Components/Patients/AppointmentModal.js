import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function DoctorModal(props) {
  const INITIAL_STATE = {
    date: null,
    doctorId: null,
  };

  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book an Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Select Appointment Date</Form.Label>
            <Form.Control
              type="date"
              value={state.date}
              onChange={handleChange}
              name="date"
            />
          </Form.Group>
          <Form.Group controlId="doctors">
            <Form.Label>Select Doctor</Form.Label>
            <Form.Control
              as="select"
              name="doctorId"
              onChange={handleChange}
              value={state.doctorId}
            >
              <option value={1}>Dr. Saaketh</option>
              <option value={2}>Dr. Manohar</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            props.onSubmit(state);
            setState(INITIAL_STATE);
          }}
        >
          Submit
        </Button>
        <Button
          onClick={() => {
            setState(INITIAL_STATE);
            props.onHide();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DoctorModal;
