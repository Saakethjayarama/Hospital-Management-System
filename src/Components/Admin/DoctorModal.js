import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function DoctorModal(props) {
  const INITIAL_STATE = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const disabled =
    state.name === "" ||
    state.email === "" ||
    state.phoneNumber === "" ||
    state.password === "" ||
    state.confirmPassword === "" ||
    state.password !== state.confirmPassword;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admit Doctor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={state.name}
              onChange={handleChange}
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
              value={state.email}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              onChange={handleChange}
              name="phoneNumber"
              value={state.phoneNumber}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={state.password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicRePassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="confirmPassword"
              value={state.confirmPassword}
            />
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
          disabled={disabled}
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
