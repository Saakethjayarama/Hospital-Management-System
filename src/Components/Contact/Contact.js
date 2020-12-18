import React from "react";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [state, setState] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const { name } = state;
    window.open(
      `https://wa.me/917406254072?text=Hey i am ${name}, please lemme know about your hospital.`
    );
  };

  console.log(state);
  return (
    <div className="Contact">
      <div className="content">
        <h3>Contact us</h3>
        <Form>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={state.name}
              onChange={handleChange}
              name="name"
            />
          </Form.Group>

          <Button variant="primary" onClick={handleClick}>
            Drop Text
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
