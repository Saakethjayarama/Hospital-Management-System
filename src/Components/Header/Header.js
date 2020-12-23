import React, { useEffect, useState } from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AccessibleIcon from "@material-ui/icons/Accessible";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useHistory } from "react-router-dom";
import { useStore, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions";

function Header() {
  const store = useStore();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usr = store.getState()?.user;
    setUser(usr);

    const subscription = store.subscribe(() => {
      const usr = store.getState()?.user;
      setUser(usr);
    });

    return () => {
      subscription();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const type = user.userType;
      if (type == 1) {
        history.push("/admin");
      } else if (type == 2) {
        history.push("/doctor");
      } else if (type == 3) {
        history.push("/patient");
      }
    }
  }, [user]);

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
        {user ? null : DefaultList()}
        {user?.userType == 1 ? AdminLoggedIn() : null}
        {user?.userType == 2 ? DoctorsLoggedIn() : null}
        {user?.userType == 3 ? PatientLoggedIn() : null}
        {user?.userType ? (
          <div
            className="link"
            onClick={() => {
              dispatch(logout());
              history.push("/login");
            }}
          >
            <ExitToAppIcon className="icon" />
            Logout
          </div>
        ) : null}
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
