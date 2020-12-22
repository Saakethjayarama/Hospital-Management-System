import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function DoctorModal(props) {
  const INITIAL_STATE = {
    date: null,
    doctorId: null,
  };

  const [state, setState] = useState(INITIAL_STATE);

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost/users/byType.php?type=1")
      .then((res) => res.json())
      .then((data) => {
        const docs = [];
        data.forEach((doctor, index) => {
          const { id, name } = doctor;
          if (index === 0) {
            setState({
              ...state,
              doctorId: id,
            });
          }
          docs.push({
            id,
            name,
          });
        });
        setDoctors(docs);
      });
  }, []);
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
              onChange={(event) => {
                setState({
                  ...state,
                  date: event.target.value,
                });
              }}
              name="date"
            />
          </Form.Group>
          <Form.Group controlId="doctors">
            <Form.Label>Select Doctor</Form.Label>
            <Form.Control
              as="select"
              name="doctorId"
              onChange={(event) => {
                setState({
                  ...state,
                  doctorId: event.target.value,
                });
              }}
              value={state.doctorId}
            >
              {doctors.map((value, index) => {
                return (
                  <option value={value.id} key={index}>
                    {value.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            props.onSubmit(state);
          }}
        >
          Submit
        </Button>
        <Button
          onClick={() => {
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
