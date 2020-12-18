import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AccessibleIcon from "@material-ui/icons/Accessible";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      Coder's Hospital Management System
      <div className="navlinks">
        <Link to="/">
          <div className="link">
            <HomeIcon className="icon" />
            Home
          </div>
        </Link>
        <Link to="/about">
          <div className="link">
            <InfoIcon className="icon" />
            About
          </div>
        </Link>
        <Link to="/contact">
          <div className="link">
            <ContactPhoneIcon className="icon" />
            Contact us
          </div>
        </Link>
        {DefaultList()}
        {DoctorsLoggedIn()}
        {PatientLoggedIn()}
        {AdminLoggedIn()}
      </div>
    </div>
  );
}

const DefaultList = () => {
  return (
    <>
      <Link to="/login">
        <div className="link">
          <LockOpenIcon className="icon" />
          Login
        </div>
      </Link>
    </>
  );
};

const DoctorsLoggedIn = () => {
  return (
    <>
      <Link to="/doctor">
        <div className="link">
          <LocalHospitalIcon className="icon" />
          Dashboard
        </div>
      </Link>
    </>
  );
};

const PatientLoggedIn = () => {
  return (
    <>
      <Link to="/patient">
        <div className="link">
          <AccessibleIcon className="icon" />
          Dashboard
        </div>
      </Link>
    </>
  );
};

const AdminLoggedIn = () => {
  return (
    <>
      <Link to="/admin">
        <div className="link">
          <SupervisorAccountIcon className="icon" />
          Dashboard
        </div>
      </Link>
    </>
  );
};

export default Header;
