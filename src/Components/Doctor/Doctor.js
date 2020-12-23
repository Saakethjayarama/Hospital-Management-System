import React, { useEffect, useState } from "react";
import "./Doctor.css";
import { Table } from "react-bootstrap";
import CheckIcon from "@material-ui/icons/Check";
import CallIcon from "@material-ui/icons/Call";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import ConfirmModal from "./ConfirmModal";
import { useHistory } from "react-router-dom";
import { useStore } from "react-redux";

function Doctor() {
  const store = useStore();
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

  const [patients, setPatients] = useState([]);
  const [trigger, setTrigger] = useState(null);

  useEffect(() => {
    fetch("http://localhost/appointments/appointments.php?id=1")
      .then((res) => res.json())
      .then((data) => {
        const patientsList = [];

        data.forEach((value) => {
          const { id, name, phoneNumber } = value;
          patientsList.push({
            id,
            name,
            phoneNumber,
          });
        });
        setPatients(patientsList);
      });
  }, [trigger]);

  const call = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const [current, setCurrent] = useState(null);
  const deleteAppointment = () => {
    const id = current;

    fetch("http://localhost/appointments/status.php", {
      method: "PUT",
      body: JSON.stringify({
        id,
        status: 3,
      }),
    }).then(() => {
      setTrigger(Math.random());
    });

    setShowConfirm(false);
  };

  const done = (id) => {
    fetch("http://localhost/appointments/status.php", {
      method: "PUT",
      body: JSON.stringify({
        id,
        status: 2,
      }),
    }).then(() => {
      setTrigger(Math.random());
    });
  };

  return (
    <div className="Doctor">
      <ConfirmModal
        show={showConfirm}
        handleClose={() => setShowConfirm(false)}
        confirm={deleteAppointment}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.phoneNumber}</td>
                <td align="center">
                  <CheckIcon
                    className="icons"
                    onClick={() => {
                      done(value.id);
                    }}
                  />
                  <CallIcon
                    className="icons"
                    onClick={() => call(value.phoneNumber)}
                  />
                  <HourglassFullIcon
                    className="icons"
                    onClick={() => {
                      setCurrent(value.id);
                      setShowConfirm(true);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Doctor;
