import React, { useState } from "react";
import "./Landing.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login, init } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="Landing">
      <div className="content">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleSubmit = () => {
    const { name, email, password, phoneNumber } = state;
    fetch("http://localhost/users/add.php", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNumber,
        userType: 3,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const [key, value] of Object.entries(data)) {
          setCookie(key, value, 1);
        }
        dispatch(init());
        history.push("/patient");
      });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}
    >
      <Form style={{ width: "30%" }}>
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
        <Button
          variant="primary"
          onClick={() => {
            handleSubmit(state);
            setState(INITIAL_STATE);
          }}
          disabled={disabled}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

const Account = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div>
      {isSignIn ? <Login /> : <Signup />}
      {isSignIn ? (
        <div
          onClick={() => {
            setIsSignIn(false);
          }}
          style={{ cursor: "pointer", textAlign: "center" }}
        >
          Dont have an Account? Signup
        </div>
      ) : (
        <div
          onClick={() => {
            setIsSignIn(true);
          }}
          style={{ cursor: "pointer", textAlign: "center" }}
        >
          Have an Account? Login
        </div>
      )}
    </div>
  );
};

export default Account;
