import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AccessibleIcon from "@material-ui/icons/Accessible";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

function Header() {
  return (
    <div className="Header">
      Coder's Hospital Management System
      <div className="navlinks">
        <div className="link">
          <HomeIcon className="icon" />
          Home
        </div>
        <div className="link">
          <InfoIcon className="icon" />
          About
        </div>
        <div className="link">
          <ContactPhoneIcon className="icon" />
          Contact us
        </div>
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
      <div className="link">
        <LockOpenIcon className="icon" />
        Login
      </div>
    </>
  );
};

const DoctorsLoggedIn = () => {
  return (
    <>
      <div className="link">
        <LocalHospitalIcon className="icon" />
        Dashboard
      </div>
    </>
  );
};

const PatientLoggedIn = () => {
  return (
    <>
      <div className="link">
        <AccessibleIcon className="icon" />
        Dashboard
      </div>
    </>
  );
};

const AdminLoggedIn = () => {
  return (
    <>
      <div className="link">
        <SupervisorAccountIcon className="icon" />
        Dashboard
      </div>
    </>
  );
};

export default Header;
